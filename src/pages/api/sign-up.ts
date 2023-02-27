// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from "next";

import prisma from "lib/clients/prisma";

export type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  accept: boolean;
};

const signUp = async (req: NextApiRequest, res: NextApiResponse) => {
  const data = req.body as FormValues;

  const { firstName, lastName, email, phone } = data;
  try {
    if (req.method === "POST") {
      const prismaRes = await prisma.user.create({
        data: {
          name: `${firstName} ${lastName}`,
          email,
          phone,
        },
      });
      res.statusCode = 200;
      res.send(prismaRes);
    }
  } catch (e) {
    res.send(e);
  }
};

export default signUp;
