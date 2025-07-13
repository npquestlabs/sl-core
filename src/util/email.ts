import nodemailer from 'nodemailer'
import { AppError } from './error'
import config from '../configs/environment'
import emailConfig from '../configs/email'

const generateBaseHtml = (subject: string, contentHtml: string) => {
  return `
      <!DOCTYPE html>
      <html>
      <head>
        <title>${subject}</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
            line-height: 1.6;
            color: #333;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
          }
          .container {
            margin: 20px auto;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 8px;
            max-width: 600px;
            background-color: #fff;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          }
          h2 {
            color: #555;
            border-bottom: 1px solid #eee;
            padding-bottom: 10px;
            margin-top: 0;
          }
          p {
            margin-bottom: 15px;
          }
          a {
            color: #007bff;
            text-decoration: none;
          }
          a:hover {
            text-decoration: underline;
          }
          .button {
            display: inline-block;
            background-color: #007bff;
            color: white !important; /* !important for email clients */
            padding: 10px 20px;
            text-decoration: none;
            border-radius: 5px;
            font-weight: bold;
          }
           .button:hover {
               background-color: #0056b3;
           }
          .footer {
            margin-top: 20px;
            font-size: 0.9em;
            color: #777;
            border-top: 1px solid #eee;
            padding-top: 10px;
            text-align: center;
          }
          .warning {
              color: #c0392b;
              font-weight: bold;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h2>${subject}</h2>
          ${contentHtml}
          <div class="footer">
            <p>This email was sent from ${
              config.appName
            }.</p>
             ${
               config.appName
                 ? `<p>&copy; ${new Date().getFullYear()} ${
                     config.appName
                   }. All rights reserved.</p>`
                 : ''
             }
          </div>
        </div>
      </body>
      </html>
    `
}

const sendEmail = async (mailOptions: nodemailer.SendMailOptions) => {
  try {
    const info = await emailConfig.transporter.sendMail(mailOptions)

    console.log('Message sent: %s', info.messageId)

    return { success: true, messageId: info.messageId }
  } catch (error) {
    console.error('Error sending email:', error)
    throw new AppError(`Failed to send email`, 500)
  }
}

export const sendVerificationEmail = async (user: { email: string; firstName: string; lastName: string; }, token: string) => {
  const subject = 'Verify Your Email Address'
  const verificationLink = `${config.clientUrl}/auth/verify-email?verification=${token}`

  const textBody = `
    Hi ${user.firstName} ${user.lastName},

    Thank you for signing up!

    To activate your account, please verify your email address by clicking on the link below:

    ${verificationLink}

    If you did not create an account, please ignore this email.

    ${config.appName}
  `

  const htmlContent = `
    <p>Hi ${user.firstName} ${user.lastName},</p>
    <p>Thank you for signing up!</p>
    <p>To activate your account, please verify your email address by clicking on the button below:</p>
    <p style="text-align: center;"><a href="${verificationLink}" class="button">Verify Email Address</a></p>
    <p>If the button above doesn't work, you can also copy and paste this link into your web browser:</p>
    <p><a href="${verificationLink}">${verificationLink}</a></p>
    <p>If you did not create an account, please ignore this email.</p>
    <p>Sincerely,<br>${config.appName}</p>
  `

  const htmlBody = generateBaseHtml(subject, htmlContent)

  const mailOptions: nodemailer.SendMailOptions = {
    from: `"${config.appName}" <${config.appEmail}>`,
    to: user.email,
    subject: subject,
    text: textBody,
    html: htmlBody,
  }

  return sendEmail(mailOptions)
}

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const subject = 'Password Reset Request'
  const resetLink = `${config.clientUrl}/auth/reset-password?verification=${token}`
  const expirationMinutes = 60

  const textBody = `
    Hi there,

    You recently requested to reset the password for your account.

    Please click on the link below to reset your password:

    ${resetLink}

    This link is valid for the next ${expirationMinutes} minutes.

    If you did not request a password reset, please ignore this email. Your password will remain unchanged.

    ${config.appName}
  `

  const htmlContent = `
    <p>Hi there,</p>
    <p>You recently requested to reset the password for your account.</p>
    <p>Please click on the button below to reset your password:</p>
     <p style="text-align: center;"><a href="${resetLink}" class="button">Reset Your Password</a></p>
    <p>If the button above doesn't work, you can also copy and paste this link into your web browser:</p>
    <p><a href="${resetLink}">${resetLink}</a></p>
    <p class="warning">Please note: This link is valid for the next ${expirationMinutes} minutes.</p>
    <p>If you did not request a password reset, please ignore this email. Your password will remain unchanged.</p>
    <p>Sincerely,<br>${config.appName}</p>
  `

  const htmlBody = generateBaseHtml(subject, htmlContent)

  const mailOptions: nodemailer.SendMailOptions = {
    from: `"${config.appName}" <${config.appEmail}>`,
    to: email,
    subject: subject,
    text: textBody,
    html: htmlBody,
  }

  return sendEmail(mailOptions)
}
