import nodemailer from 'nodemailer'
import config from './environment'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: config.appEmail,
    pass: config.appEmailPassword,
  },
})

export async function connectEmail() {
  const result = await transporter.verify()
  if (result) {
    console.log('Email transporter is ready to send emails')
  } else {
    console.error('Error setting up email transporter')
  }

  return result
}

export default { transporter }
