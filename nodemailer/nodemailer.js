const nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '@gmail.com',
    pass: ''
  }
});

var mailOptions = {
  from: '@gmail.com',
  to: '@aneel.gov.br',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

exports.sendMail = transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 
