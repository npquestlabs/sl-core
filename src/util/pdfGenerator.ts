import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';
import cloudinary from '../configs/cloudinary';
import { Lease } from '../../generated/prisma';

interface Landlord {
  id: string;
  name: string;
  email: string;
  phone: string;
}

interface Tenant {
  id: string;
  name: string;
  email: string;
  phone: string;
}

interface Unit {
  id: string;
  address: string;
  rentAmount: number;
  type: string;
  roomSize: string;
}

// interface Lease {
//   id: string;
//   landlord: Landlord;
//   tenant: Tenant;
//   unit: Unit;
//   startedAt: Date;
//   endsAt: Date;
//   advanceMonths: number;
//   rules?: string;
// }

interface Payment {
  id: string;
  tenant: Tenant;
  property: Property;
  amount: number;
  datePaid: Date;
  method: string;
}

// Save PDF and upload to Cloudinary
const savePDFAndUploadToCloudinary = async (doc: PDFDocument, filename: string): Promise<string> => {
  const tempDir = path.join(__dirname, '..', '..', 'temp');

  if (!fs.existsSync(tempDir)) {
    fs.mkdirSync(tempDir, { recursive: true });
  }

  const outputPath = path.join(tempDir, filename);
  const writeStream = fs.createWriteStream(outputPath);

  await new Promise<void>((resolve, reject) => {
    doc.pipe(writeStream);
    doc.end();
    writeStream.on('finish', () => resolve());
    writeStream.on('error', (err) => reject(err));
  });

  try {
    const result = await cloudinary.uploader.upload(outputPath, {
      resource_type: 'raw',
      public_id: `smart-landlord/${filename.replace('.pdf', '')}`,
      overwrite: true,
    });

    fs.unlinkSync(outputPath);
    return result.secure_url;
  } catch (error: any) {
    if (fs.existsSync(outputPath)) {
      fs.unlinkSync(outputPath);
    }
    throw new Error(`Failed to upload PDF to Cloudinary: ${error.message}`);
  }
};

const addWatermark = (doc: PDFDocument) => {
  const watermarkText = 'Smart Landlord Platform';
  const { width, height } = doc.page;

  doc.fontSize(50)
    .fillColor('lightgray')
    .rotate(45, { origin: [width / 2, height / 2] })
    .opacity(0.2)
    .text(watermarkText, width / 3, height / 3, {
      align: 'center',
      lineBreak: false,
    })
    .rotate(-45)
    .opacity(1)
    .fillColor('black');
};

// Generate Lease Agreement PDF
export const generateLeasePDF = async (lease: Lease): Promise<string> => {
  const doc = new PDFDocument({ margin: 50 });
  const filename = `lease-${lease.id}.pdf`;
  const today = new Date();
  const isExpired = new Date(lease.endsAt) < today;
  const leaseStatus = isExpired ? 'EXPIRED' : 'ACTIVE';

  addWatermark(doc);

  doc.fontSize(20).text('Lease Agreement', { align: 'center' });
  doc.fontSize(12).text(`Lease Status: ${leaseStatus}`, { align: 'center' });
  doc.moveDown();

  doc.fontSize(14).text('Landlord Details', { underline: true });
  doc.fontSize(12).text(`Name: ${lease..name}`);
  doc.text(`Email: ${lease.landlord.email}`);
  doc.text(`Phone: ${lease.landlord.phone}`);
  doc.moveDown();

  doc.fontSize(14).text('Tenant Details', { underline: true });
  doc.fontSize(12).text(`Name: ${lease.tenant.name}`);
  doc.text(`Email: ${lease.tenant.email}`);
  doc.text(`Phone: ${lease.tenant.phone}`);
  doc.moveDown();

  doc.fontSize(14).text('Property Details', { underline: true });
  doc.fontSize(12).text(`Address: ${lease.unit.complex.address}`);
  doc.text(`Rent Amount: GHS ${lease.property.rentAmount}`);
  doc.text(`Room Type: ${lease.property.roomType}`);
  doc.text(`Room Size: ${lease.property.roomSize}`);
  doc.moveDown();

  doc.fontSize(14).text('Lease Terms', { underline: true });
  doc.fontSize(12).text(`Start Date: ${lease.startedAt.toISOString().split('T')[0]}`);
  doc.text(`End Date: ${lease.endsAt.toISOString().split('T')[0]}`);
  doc.text(`Advance Months: ${lease.advanceMonths}`);
  if (lease.rules) {
    doc.text(`Custom Rules: ${lease.rules}`);
  }
  doc.moveDown();

  doc.fontSize(14).text('Signatures', { underline: true });
  doc.moveDown();
  doc.fontSize(12).text('Landlord: ___________________________');
  doc.text('Tenant: ___________________________');
  doc.text(`Date: ${today.toISOString().split('T')[0]}`);

  return savePDFAndUploadToCloudinary(doc, filename);
};

// Generate Rent Card PDF
export const generateRentCardPDF = async (lease: Lease): Promise<string> => {
  const doc = new PDFDocument({ margin: 50 });
  const filename = `rent-card-${lease.id}.pdf`;

  addWatermark(doc);

  doc.fontSize(20).text('Rent Card', { align: 'center' });
  doc.moveDown();

  doc.fontSize(12).text(`Landlord Name: ${lease.landlord.name}`);
  doc.text(`Tenant Name: ${lease.tenant.name}`);
  doc.text(`Property Address: ${lease.property.address}`);
  doc.text(`Rent Amount: GHS ${lease.property.rentAmount}`);
  doc.text(`Lease Start Date: ${lease.startDate.toISOString().split('T')[0]}`);
  doc.text(`Lease End Date: ${lease.endDate.toISOString().split('T')[0]}`);
  doc.moveDown();

  doc.fontSize(10).text('Issued in compliance with Rent Control Act, 1986 (Ghana)', { align: 'center' });

  return savePDFAndUploadToCloudinary(doc, filename);
};

// Generate Payment Receipt PDF
export const generateReceiptPDF = async (payment: Payment): Promise<string> => {
  const doc = new PDFDocument({ margin: 50 });
  const filename = `receipt-${payment.id}.pdf`;

  addWatermark(doc);

  doc.fontSize(20).text('Payment Receipt', { align: 'center' });
  doc.moveDown();

  doc.fontSize(12).text(`Tenant Name: ${payment.tenant.name}`);
  doc.text(`Property Address: ${payment.property.address}`);
  doc.text(`Amount: GHS ${payment.amount}`);
  doc.text(`Payment Method: ${payment.method}`);
  doc.text(`Date Paid: ${payment.datePaid.toISOString().split('T')[0]}`);
  doc.moveDown();

  doc.fontSize(16).fillColor('green').text('✔ PAID', { align: 'center' });
  doc.fillColor('black');
  doc.fontSize(10).text(`Generated on: ${new Date().toISOString().split('T')[0]}`, { align: 'center' });

  return savePDFAndUploadToCloudinary(doc, filename);
};
