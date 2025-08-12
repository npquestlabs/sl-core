import nodemailer from 'nodemailer'
import envConfig from './environment'

const transporter = nodemailer.createTransport({
  host: envConfig.smtpHost,
  port: 587,
  secure: false,
  auth: {
    user: envConfig.smtpUser,
    pass: envConfig.smtpPass,
  },
  tls: {
    rejectUnauthorized: true
  },
  pool: true,
})

export async function connectEmail() {
  try {
    await transporter.verify()
    console.log('Email transporter is ready to send emails')
    return true
  } catch (error) {
    console.error('Error setting up email transporter:', error)
    return false
  }
}

export default { transporter }