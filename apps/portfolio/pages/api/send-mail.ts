import type { NextApiRequest, NextApiResponse } from 'next';
import { object, SchemaOf, string, ValidationError } from 'yup';
import * as mailer from 'nodemailer';
import axios, { AxiosResponse } from 'axios';

type RequestDTO = {
  name: string;
  email: string;
  message: string;
};

type ResponseDTO =
  | Error
  | {
      messageId: string;
    };

const validationSchema: SchemaOf<RequestDTO> = object({
  name: string().trim().required(),
  email: string().trim().email().required(),
  message: string().trim().max(300).required(),
}).defined();

const sendMail = async (response: RequestDTO) => {
  let transporterOptions = {
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: Boolean(process.env.SMTP_SECURE),
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  };

  const emailOptions = {
    from: process.env.EAMIL_SENDER, // sender address
    to: process.env.EAMIL_TO, // list of receivers
    subject: `New Hire ✔ ("${response.name}" <${response.email}>)`, // Subject line
    text: response.message, // plain text body
    html: response.message, // html body
  };

  if (process.env.NODE_ENV !== 'production') {
    const testAccount = await mailer.createTestAccount();
    transporterOptions = {
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user, // generated ethereal user
        pass: testAccount.pass, // generated ethereal password
      },
    };
  }

  const transporter = mailer.createTransport(transporterOptions);
  const info = await transporter.sendMail(emailOptions);

  console.log('sendMail', info);

  return {
    ...info,
    url: mailer.getTestMessageUrl(info),
  };
};

type ReCaptchaRequestDTO = {
  secret: string;
  response: string;
  remoteip?: string;
};

type ReCaptchaResponseDTO = {
  success: boolean;
  challenge_ts: string;  // timestamp of the challenge load (ISO format yyyy-MM-dd'T'HH:mm:ssZZ)
  hostname: string;         // the hostname of the site where the reCAPTCHA was solved
  'error-codes': [];
};

const verifyReCaptcha = async (token: string): Promise<void> => {
  const req: ReCaptchaRequestDTO = {
    secret: process.env.RECAPTCHA_SECRET_KEY,
    response: token,
  };
  return axios.post<ReCaptchaRequestDTO, AxiosResponse<ReCaptchaResponseDTO>>(
    process.env.RECAPTCHA_VERIFY_URL,
    req
  ).then(({ data }) => {
    console.log('verifyReCaptcha', data);
    throw new ValidationError('reCaptcha.error.message');
  });
};

export default async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseDTO>
) => {
  if (req.method === 'POST') {
    return validationSchema
      .validate(req.body, { abortEarly: false, strict: true })
      .then(async (response) => {
        await verifyReCaptcha(req.body.reCaptcha);
        const emailInfo = await sendMail(response);
        return res.status(200).json({ messageId: emailInfo.messageId });
      })
      .catch((err) => {
        return res.status(400).json(err);
      });
  } else {
    return res.status(404).json(new Error('Not Found'));
  }
};
