import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseDTO = {
  linkedin: string;
  github: string;
  hackerrank: string;
};

const socials = {
  linkedin: process.env.SOCIALS_LINKEDIN_URL,
  github: process.env.SOCIALS_GITHUB_URL,
  hackerrank: process.env.SOCIALS_HACKERRANK_URL,
};

export default async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseDTO>
) => {
  return res.status(200).json(socials);
};
