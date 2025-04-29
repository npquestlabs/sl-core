import nodemailer from 'nodemailer'
import config from './environment'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: config.appEmail,
    pass: config.appEmailPassword,
  },
})

transporter.verify((error, success) => {
  if (error || !success) {
    console.error(
      '🚨 Error connecting to email transporter:',
      error || 'Unknown error',
    )
  } else {
    console.log('✉️ Email transporter is ready to send messages')
  }
})

export default { transporter }
