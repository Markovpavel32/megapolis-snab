import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: 'smtp.mail.ru',
  port: 465,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: 'robot@megapolis-snab.ru',
    pass: 'XefV3ycC0eZcvwHcFKTL'
  }
})

export default transporter
