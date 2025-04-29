import nodemailer from 'nodemailer'
import { AppError } from './error'

const sendEmail = async (email: string, subject: string, body: string) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      // You might need to add connection timeout or other options here
      // depending on your requirements and email provider.
    })

    const htmlBody = `
      <html>
      <head>
        <style>
          body {
            font-family: sans-serif;
            line-height: 1.6;
            color: #333;
          }
          .container {
            margin: 20px auto;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 8px;
            max-width: 600px;
            background-color: #f9f9f9;
          }
          h2 {
            color: #555;
            border-bottom: 1px solid #eee;
            padding-bottom: 10px;
          }
          p {
            margin-bottom: 15px;
          }
          .footer {
            margin-top: 20px;
            font-size: 0.9em;
            color: #777;
            border-top: 1px solid #eee;
            padding-top: 10px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h2>${subject}</h2>
          <p>${body}</p> <div class="footer">
            <p>This email was sent from your application.</p>
          </div>
        </div>
      </body>
      </html>
    `

    const mailOptions = {
      from: `"Your App Name" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: subject,
      text: body,
      html: htmlBody,
    }

    const info = await transporter.sendMail(mailOptions)

    console.log('Message sent: %s', info.messageId)

    return { success: true, messageId: info.messageId }
  } catch (error) {
    console.error('Error sending email:', error)
    throw new AppError('Failed to send email', 500)
  }
}

export const sendVerificationEmail = async (email: string, token: string) => {
  const subject = 'Verify Your Email Address'
  const body = `
    <p>Click the link below to verify your email address:</p>
    <a href="${process.env.APP_URL}/verify-email?token=${token}">Verify Email</a>
  `
  return sendEmail(email, subject, body)
}

export { sendEmail }
