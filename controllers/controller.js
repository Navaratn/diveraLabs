var nodemailer = require("nodemailer");
var smtpTransport = require("nodemailer-smtp-transport");
const contacts = require("../schemas/ContactSchema");
require("dotenv").config();

const sendEmail = async (req, res) => {
  req_body = req.body;
  const mailData = {
    from: req_body.email,
    to: process.env.ContactUs_Recipient_Email,
    subject: req_body.subject,
    text: req_body.message,
    html: `<strong>From: ${req_body.email} </strong>\n\n<p>${req_body.message}</p>`,
  };

  const clientData = {
    from: process.env.ContactUs_Recepient_Email,
    to: req_body.email,
    subject: "your message to Deverra recieved",
    text: `Hi ${req_body.name}!\n\nYour message to contact Deverra was sent successfully, You can expect us to respond within the next 2 working days!\n\nRegards,\nSalus Lab Team`,
    html: `<strong>Hi ${req_body.name}!</strong><br><br><p>Your message to contact Deverra was sent successfully, You can expect us to respond within the next 2 working days!<p><br><br>Regards,<br><strong>Salus Lab Team</strong>`,
  };

  const transporter = nodemailer.createTransport({
    host: process.env.ContactUs_Recipient_Host,
    port: 465,
    // service: 'gmail',
    secure: true,
    auth: {
      user: process.env.ContactUs_Recipient_Email,
      pass: process.env.ContactUs_Recipient_Pass,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  transporter.sendMail(mailData, (err, info) => {
    if (err) {
      return console.log(err);
    } else {
      console.log("Email sent: " + info.response);
    }
  });

  transporter.sendMail(clientData, (err, info) => {
    if (err) {
      return console.log(err);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
  // res.status(200)
};
const addToDB = async function (req, res) {
  try {
    // save to the db
    req_body = req.body;
    const contact = await contacts.create(req_body);
    res.status(201);
    // .redirect('/contact')
  } catch (error) {
    res.status(500).send("Try sending the email once again");
  }
};
module.exports = {
  sendEmail,
  addToDB,
};
