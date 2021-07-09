import type { NextApiRequest, NextApiResponse } from 'next';
import { object, SchemaOf, string } from 'yup';

import { verifyReCaptcha } from '../../services/verifyReCaptcha';
import { sendMail } from '../../services/sendMail';

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

export const post = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseDTO>
) => {
  return validationSchema
    .validate(req.body, { abortEarly: false, stripUnknown: true })
    .then(async (data) => {
      await verifyReCaptcha(req.body.reCaptcha);
      const emailInfo = await sendMail(data.name, data.email, data.message);
      return res.status(200).json({ messageId: emailInfo.messageId });
    })
    .catch((err) => {
      return res.status(400).json(err);
    });
};
