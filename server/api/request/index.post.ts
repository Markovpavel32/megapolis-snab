import transporter from '~/server/modules/mailer'
export default eventHandler(async (event) => {
  const body = await readBody(event)
  const info = await transporter.sendMail({
    from: '"Fred Foo 👻" robot@megapolis-snab.ru', // sender address
    to: "p.markov@megapolis-snab.ru", // list of receivers
    subject: "Hello ✔", // Subject line
    text: `name: ${body.name}, phone: ${body.phone}`, // plain text body
    // html: "<b>Hello world?</b>", // html body
  })
  
  console.log("Message sent: %s", info.messageId)
  return { body }
})
