import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../database';
import { Entry } from '../../models';
import { seedData } from '../../database/seed-data';

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (process.env.NODE_ENV === 'production') {
    return res.status(401).json({ message: 'No acces to this endpoint' });
  }

  await db.connect();
  await Entry.deleteMany();
  await Entry.insertMany(seedData.entries);

  await db.disconnect();

  res.status(200).json({ message: 'Process completed' });
}
