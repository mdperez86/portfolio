import * as mailer from 'nodemailer';

const transporterOptions = {
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: Boolean(process.env.SMTP_SECURE),
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
};

export const sendMail = async (
  name: string,
  email: string,
  message: string
) => {
  const emailOptions = {
    from: process.env.EAMIL_SENDER, // sender address
    to: process.env.EAMIL_TO, // list of receivers
    subject: `New Hire ✔ ("${name}" <${email}>)`, // Subject line
    text: message, // plain text body
    html: message, // html body
  };

  const transporter = mailer.createTransport(transporterOptions);
  const info = await transporter.sendMail(emailOptions);

  console.log('sendMail', info);

  return {
    ...info,
    url: mailer.getTestMessageUrl(info),
  };
};
