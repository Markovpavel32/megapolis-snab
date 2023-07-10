import nodemailer from 'nodemailer'

const runtimeConfig = useRuntimeConfig()

const transporter = nodemailer.createTransport({
  host: runtimeConfig.mailer.host,
  port: runtimeConfig.mailer.port,
  secure: true,
  auth: {
    user: runtimeConfig.mailer.auth.user,
    pass: runtimeConfig.mailer.auth.pass
  }
})

export default transporter
