import axios, { AxiosResponse } from 'axios';
import { ValidationError } from 'yup';

type ReCaptchaRequestDTO = {
  secret: string;
  response: string;
  remoteip?: string;
};

type ReCaptchaResponseDTO = {
  success: boolean;
  challenge_ts: string; // timestamp of the challenge load (ISO format yyyy-MM-dd'T'HH:mm:ssZZ)
  hostname: string; // the hostname of the site where the reCAPTCHA was solved
  score: number;
  action: string;
  'error-codes': [];
};

export const verifyReCaptcha = async (token: string): Promise<ReCaptchaResponseDTO> => {
  const params = new URLSearchParams();
  params.append('secret', process.env.RECAPTCHA_SECRET_KEY);
  params.append('response', token);

  return axios
    .post<ReCaptchaRequestDTO, AxiosResponse<ReCaptchaResponseDTO>>(
      process.env.RECAPTCHA_VERIFY_URL,
      params,
      {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      }
    )
    .then(({ data }) => {
      console.log('verifyReCaptcha', data);
      if (data.success)
        return data;
      throw new ValidationError('reCaptcha.error.message');
    });
};
