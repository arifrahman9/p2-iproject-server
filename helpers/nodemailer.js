const nodemailer = require("nodemailer")

const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "projectCashierApp@gmail.com",
    pass: "cashierApp",
  },
})

function confirmationRegistered(payload, content, subject) {
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

function confirmationSwitchStatus(payload, content, subject) {
  const mailOptions = {
    from: "projectCashierApp@gmail.com",
    to: payload.email,
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

module.exports = {
  confirmationRegistered,
  confirmationSwitchStatus,
}
