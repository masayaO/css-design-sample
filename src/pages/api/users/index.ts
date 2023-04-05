import { NextApiRequest, NextApiResponse } from 'next';

export type User = {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
};

const users: User[] = [
  {
    id: 1,
    name: '田中 太郎',
    createdAt: '2021-01-01T00:00:00+09:00',
    updatedAt: '2021-01-01T00:00:00+09:00',
  },
  {
    id: 2,
    name: '山田 翔太',
    createdAt: '2021-01-15T00:00:00+09:00',
    updatedAt: '2021-01-15T00:00:00+09:00',
  },
];

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await delay(1500);
  res.status(200).json(users);
};

export default handler;
