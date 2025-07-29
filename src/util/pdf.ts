import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';
import cloudinary from '../configs/cloudinary';
import { Prisma, LeaseStatus, PaymentStatus } from '../../generated/prisma';
import { formatDuration, intervalToDuration } from 'date-fns';
import { logger } from '../configs/logger';


type LeasePayloadForPDF = Prisma.LeaseGetPayload<{
  include: {
    unit: {
      include: {
        complex: true;
      };
    };
    landlord: {
      include: {
        user: true;
      };
    };
    tenant: {
      include: {
        user: true;
      };
    };
  };
}>;


type RentCardPayload = Prisma.LeaseGetPayload<{
  include: {
    unit: {
      include: {
        complex: true;
      };
    };
    landlord: {
      include: {
        user: true;
      };
    };
    tenant: {
      include: {
        user: true;
      };
    };
  };
}>;


type PaymentPayloadForPDF = Prisma.PaymentGetPayload<{
  include: {
    lease: {
      include: {
        tenant: {
          include: {
            user: true;
          }
        };
        unit: {
          include: {
            complex: true;
          }
        };
      };
    };
  };
}>;

const formatDate = (date: Date | null | undefined) => date ? new Date(date).toLocaleDateString('en-GB') : 'N/A';

const getText = (value: string | null | undefined, prefix = '') => prefix + (value || 'N/A');

/**
 * Formats a duration given in seconds into a human-readable string.
 * Example: 7 * 86400 seconds becomes "1 week"
 * Example: 90 * 86400 seconds becomes "2 months, 4 weeks, 2 days" (or customize format)
 * @param seconds The duration in seconds.
 * @returns A formatted string like "1 month", "2 weeks, 3 days", or "N/A".
 */
const formatAdvanceDuration = (seconds: number | null | undefined): string => {
  if (!seconds || seconds <= 0) {
    return 'N/A';
  }

  try {
    const duration = intervalToDuration({ start: 0, end: seconds * 1000 });

    return formatDuration(duration, {
      format: ['years', 'months', 'weeks', 'days'],
      zero: false,
      delimiter: ', ',
    });
  } catch (error) {
    logger.error("Error formatting duration:", error);
    return `${seconds} seconds (formatting error)`;
  }
};


/**
 * Saves a PDF document to a temporary local file, uploads it to Cloudinary,
 * and then deletes the local file.
 * @param doc The PDFKit document instance.
 * @param filename The desired filename for the PDF (e.g., 'lease-123.pdf').
 * @returns {Promise<string>} The secure URL of the uploaded file on Cloudinary.
 */
const savePDFAndUploadToCloudinary = async (doc: typeof PDFDocument, filename: string): Promise<string> => {
  // Consider using os.tmpdir() for a system-standard temp location
  const tempDir = path.join(__dirname, '..', '..', 'temp');

  if (!fs.existsSync(tempDir)) {
    fs.mkdirSync(tempDir, { recursive: true });
  }

  const outputPath = path.join(tempDir, filename);
  const writeStream = fs.createWriteStream(outputPath);

  await new Promise<void>((resolve, reject) => {
    doc.pipe(writeStream);
    doc.end();
    writeStream.on('finish', resolve);
    writeStream.on('error', (err) => {
      logger.error("Error writing PDF to temporary file:", err);
      reject(new Error(`Failed to write PDF to temporary file: ${err.message}`));
    });

    doc.on('error', (err) => {
      logger.error("Error during PDF generation (piping):", err);
      if (!writeStream.writableEnded) {
        writeStream.end();
      }
      reject(new Error(`PDF generation stream error: ${err.message}`));
    });
  });

  try {
    logger.info(`Uploading ${outputPath} to Cloudinary...`);
    const result = await cloudinary.uploader.upload(outputPath, {
      resource_type: 'raw',
      public_id: `smart-landlord/documents/${filename.replace('.pdf', '')}`,
      overwrite: true,
    });
    logger.info(`Successfully uploaded to Cloudinary: ${result.secure_url}`);

    fs.unlinkSync(outputPath);
    return result.secure_url;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    logger.error(`Failed to upload ${filename} to Cloudinary:`, error);
    // Ensure cleanup even if upload fails
    if (fs.existsSync(outputPath)) {
      try {
        fs.unlinkSync(outputPath);
      } catch (unlinkErr) {
        logger.error(`Failed to delete temporary file ${outputPath} after upload error:`, unlinkErr);
      }
    }

    throw new Error(`Failed to upload PDF to Cloudinary. ${error.message || error}`);
  }
};

/**
 * Adds a standard watermark to the PDF document.
 * @param doc The PDFKit document instance.
 */
const addWatermark = (doc: typeof PDFDocument) => {
  const watermarkText = 'Smart Landlord Platform';
  const { width, height } = doc.page;
  const centerX = width / 2;
  const centerY = height / 2;

  doc.save();

  doc.fontSize(50)
    .fillColor('gray')
    .opacity(0.15)
    .rotate(45, { origin: [centerX, centerY] })
    .text(watermarkText, 0, centerY - 20, {
      width: width,
      align: 'center',
      lineBreak: false,
    });

  doc.restore();
};


/**
 * Generates a Lease Agreement PDF using data fetched with specific includes.
 * @param lease - The lease data, including related unit, complex, landlord user, tenant user.
 * @returns {Promise<string>} The secure URL of the uploaded PDF on Cloudinary.
 */
export const generateLeasePDF = async (lease: LeasePayloadForPDF): Promise<string> => {
  const doc = new PDFDocument({ margin: 50, bufferPages: true });
  const filename = `lease-agreement-${lease.id}.pdf`;
  const today = new Date();

  let leaseStatusText = lease.status?.toString() || 'UNKNOWN';
  if (lease.status === LeaseStatus.ACTIVE && lease.endsAt < today) {
    leaseStatusText = 'EXPIRED';
  } else if (lease.status === LeaseStatus.PENDING && lease.startedAt > today) {
    leaseStatusText = 'PENDING START';
  }


  doc.on('pageAdded', () => addWatermark(doc));
  addWatermark(doc);

  doc.fontSize(20).text('Lease Agreement', { align: 'center' });
  doc.fontSize(10).text(`Lease ID: ${lease.id}`, { align: 'center' });
  doc.fontSize(12).text(`Status: ${leaseStatusText}`, { align: 'center' });
  doc.moveDown(2);

  doc.fontSize(14).text('Landlord Details', { underline: true });
  doc.fontSize(12);
  if (lease.landlord?.user) {
    doc.text(getText(`${lease.landlord.firstName} ${lease.landlord.lastName}`, 'Name: '));
    doc.text(getText(lease.landlord.user.email, 'Email: '));
    doc.text(getText(lease.landlord.phone, 'Phone: '));
  } else {
    doc.text('Landlord details not available.');
  }
  doc.moveDown();

  doc.fontSize(14).text('Tenant Details', { underline: true });
  doc.fontSize(12);
  if (lease.tenant?.user) {
    doc.text(getText(`${lease.tenant.firstName} ${lease.tenant.lastName}`, 'Name: '));
    doc.text(getText(lease.tenant.email, 'Email: '));
    doc.text(getText(lease.tenant.phone, 'Phone: '));
  } else {
    doc.text('Tenant details not available.');
  }
  doc.moveDown();

  doc.fontSize(14).text('Property Details', { underline: true });
  doc.fontSize(12);
  doc.text(getText(lease.unit?.complex?.address, 'Address: '));
  doc.text(getText(lease.unit?.label, 'Unit Label/Number: '));
  doc.text(`Unit Type: ${lease.unit?.type || 'N/A'}`);
  doc.text(`Rent Amount: ${lease.rentCurrency} ${lease.rentAmount}`);
  doc.moveDown();

  doc.fontSize(14).text('Lease Terms', { underline: true });
  doc.fontSize(12);
  doc.text(`Start Date: ${formatDate(lease.startedAt)}`);
  doc.text(`End Date: ${formatDate(lease.endsAt)}`);
  doc.text(`Advance Duration Paid: ${formatAdvanceDuration(lease.advanceSeconds)}`);
  doc.text(`Notice Period (days): ${lease.noticePeriod ?? 'Default'}`);
  if (lease.rules) {
    doc.text('Additional Rules/Clauses:');
    doc.text(lease.rules, { indent: 20 });
  }
  doc.moveDown();

  doc.fontSize(14).text('Signatures', { underline: true });
  doc.moveDown(2);
  doc.fontSize(12);
  doc.text('Landlord: ___________________________');
  doc.moveDown(1.5);
  doc.text('Tenant: ___________________________');
  doc.moveDown(1.5);
  doc.text(`Date Signed: ${formatDate(today)}`);
  doc.moveDown(3);
  doc.fontSize(8).text(`Document generated by Smart Landlord Platform on ${today.toISOString()}`, { align: 'center' });


  return savePDFAndUploadToCloudinary(doc, filename);
};


/**
 * Generates a Rent Card PDF using data fetched with specific includes.
 * @param lease - The lease data, including related unit, complex, landlord user, tenant user.
 * @returns {Promise<string>} The secure URL of the uploaded PDF on Cloudinary.
 */
export const generateRentCardPDF = async (lease: RentCardPayload): Promise<string> => {
  const doc = new PDFDocument({ margin: 50, bufferPages: true });
  const filename = `rent-card-${lease.id}.pdf`;

  doc.on('pageAdded', () => addWatermark(doc));
  addWatermark(doc);

  doc.fontSize(20).text('Tenant Rent Card', { align: 'center' });
  doc.fontSize(10).text(`Lease ID: ${lease.id}`, { align: 'center' });
  doc.moveDown(2);

  doc.fontSize(12);

  const landlordName = lease.landlord?.user ? `${lease.landlord.firstName} ${lease.landlord.lastName}` : 'N/A';
  const tenantName = lease.tenant?.user ? `${lease.tenant.firstName} ${lease.tenant.lastName}` : 'N/A';
  const propertyAddress = lease.unit?.complex?.address || 'N/A';

  doc.text(`Landlord Name: ${landlordName}`);
  doc.text(`Tenant Name: ${tenantName}`);
  doc.text(`Property Address: ${propertyAddress}`);
  doc.text(`Unit Label/Number: ${lease.unit?.label || 'N/A'}`);
  doc.text(`Monthly Rent Amount: ${lease.rentCurrency} ${lease.rentAmount}`);
  doc.text(`Lease Start Date: ${formatDate(lease.startedAt)}`);
  doc.text(`Lease End Date: ${formatDate(lease.endsAt)}`);
  doc.moveDown(3);

  doc.fontSize(10).text('Issued in compliance with the Rent Act, 1963 (Act 220) and Rent Control Law, 1986 (PNDCL 138) of Ghana.', {
    align: 'center',
    lineGap: 3
  });
  doc.moveDown();
  doc.fontSize(8).text(`Document generated by Smart Landlord Platform on ${new Date().toISOString()}`, { align: 'center' });


  return savePDFAndUploadToCloudinary(doc, filename);
};


/**
 * Generates a Payment Receipt PDF using data fetched with specific includes.
 * @param payment - The payment data, including related lease, tenant user, unit, complex.
 * @returns {Promise<string>} The secure URL of the uploaded PDF on Cloudinary.
 */
export const generateReceiptPDF = async (payment: PaymentPayloadForPDF): Promise<string> => {
  const doc = new PDFDocument({ margin: 50, bufferPages: true });
  const filename = `payment-receipt-${payment.id}.pdf`;

  doc.on('pageAdded', () => addWatermark(doc)); // add our watermark to other pages as well
  addWatermark(doc);

  doc.fontSize(20).text('Payment Receipt', { align: 'center' });
  doc.fontSize(10).text(`Receipt ID: ${payment.id}`, { align: 'center' });
  doc.fontSize(10).text(`Transaction Ref: ${payment.transactionRef || 'N/A'}`, { align: 'center' });
  doc.moveDown(2);

  doc.fontSize(12);
  const tenantName = payment.lease?.tenant?.user ? `${payment.lease.tenant.firstName} ${payment.lease.tenant.lastName}` : 'N/A';
  const propertyAddress = payment.lease?.unit?.complex?.address || 'N/A';
  const unitLabel = payment.lease?.unit?.label || 'N/A';
  
  doc.text(`Tenant Name: ${tenantName}`);
  doc.text(`Property Address: ${propertyAddress}`);
  doc.text(`Unit Label/Number: ${unitLabel}`);
  doc.text(`Amount Paid: ${payment.currency} ${payment.amount}`);
  doc.text(`Payment For: ${payment.type}`);
  doc.text(`Payment Method: ${payment.method}`);
  doc.text(`Date Paid: ${formatDate(payment.paidAt)}`);
  doc.moveDown(2);


  if (payment.paymentStatus === PaymentStatus.COMPLETED) {
    doc.fontSize(16).fillColor('green').text('✔ PAYMENT CONFIRMED', { align: 'center' });
  } else if (payment.paymentStatus === PaymentStatus.PENDING) {
    doc.fontSize(16).fillColor('orange').text(' PAYMENT PENDING', { align: 'center' });
  } else if (payment.paymentStatus === PaymentStatus.FAILED) {
    doc.fontSize(16).fillColor('red').text(' PAYMENT FAILED', { align: 'center' });
  } else {
    doc.fontSize(12).fillColor('black').text(`Status: ${payment.paymentStatus || 'UNKNOWN'}`, { align: 'center' });
  }

  doc.fillColor('black');
  doc.moveDown(2);
  doc.fontSize(10).text(`Receipt Generated: ${new Date().toLocaleString('en-GB')}`, { align: 'center' });
  doc.moveDown();
  doc.fontSize(8).text(`Document generated by Smart Landlord Platform`, { align: 'center' });

  return savePDFAndUploadToCloudinary(doc, filename);
};