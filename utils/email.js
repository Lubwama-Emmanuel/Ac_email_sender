const nodemailer = require("nodemailer");
const pug = require("pug");
const { htmlToText } = require("html-to-text");

module.exports = class Email {
  constructor(info) {
    this.to = process.env.TO;
    this.checkedValue = info.checkedValue;
    this.name = info.name;
    this.companyName = info.companyName;
    this.email = info.email;
    this.phone = info.phone;
    this.message = info.message;
    this.from = process.env.FROM;
  }

  newTransport() {
    return nodemailer.createTransport({
      host: process.env.HOST,
      // port: 587,
      // secure: true,
      auth: {
        user: process.env.ACCOUNT,
        pass: process.env.PASS,
      },
      tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false,
      },
    });
  }

  // Send the actual email
  async send(template, subject) {
    // 1) Render HTML based on a pug template
    const html = pug.renderFile(
      `${__dirname}/../views/emails/${template}.pug`,
      {
        checkedValue: this.checkedValue,
        name: this.name,
        companyName: this.companyName,
        email: this.email,
        phone: this.phone,
        message: this.message,
        subject,
      }
    );

    // 2) Define email options
    const mailOptions = {
      from: this.from,
      to: this.to,
      subject,
      html,
      text: htmlToText(html),
    };

    // 3) Create a transport and send email
    await this.newTransport().sendMail(mailOptions);
  }

  async sendContact() {
    await this.send("contact", "Ash Creek Advisors inquiry");
  }
};
