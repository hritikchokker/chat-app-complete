import * as nodemailer from 'nodemailer';
import { config } from '../config';
const transporter = nodemailer.createTransport({
  host: config.MAIL_HOST,
  port: config.MAIL_PORT,
  secure: config.MAIL_SECURE, // use SSL
  auth: {
    user: config.MAIL_USERNAME,
    pass: config.MAIL_PASSWORD,
    // Deangelo Tremblay
  },
});
export class MailManager {
  async sendMailViaSmtp(params) {
    try {
      const mailOptions: nodemailer.SendMailOptions = {
        from: config.MAIL_FROM_ID,
        to: params.email,
        subject: params.subject,
        html: params.html,
        // `<h1>find the link to reset your password ${params.token}</h1>`,
        // bcc: config.CONSTANT.EMAIL_TEMPLATE.BCC_MAIL,
      };
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log('Message sent: ' + info.response);
        }
      });
    } catch (error) {
      console.log(error);
    }
    return {};
  }
}
