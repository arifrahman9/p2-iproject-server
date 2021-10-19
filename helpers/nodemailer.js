const nodemailer = require("nodemailer")

const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "projectCashierApp@gmail.com",
    pass: "cashierApp",
  },
})

function sendEmail(payload, content, subject) {
  const mailOptions = {
    from: payload.email,
    to: "projectCashierApp@gmail.com",
    subject: subject,
    text: content,
  }

  transport.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err)
    } else {
      console.log(`Success sent email + ${info.response}`)
    }
  })
}

module.exports = sendEmail
