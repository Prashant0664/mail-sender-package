const nodemailer = require("nodemailer");

const Sender = (password, mail, cemail, subject, content,service="gmail") => {
  const transporter = nodemailer.createTransport({
    service: service,
    auth: {
      user: mail,
      pass: password,
    },
  });
  const mailOptions = {
    from: mail,
    to: cemail,
    subject: subject,
    html: `${content}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log("Error in Sending Mail....")
        console.log(error)
    }
  });
};

module.exports=Sender