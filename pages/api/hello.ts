import { client } from "@/lib/turso";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const rs = await client.execute("select * from example_users");
    res.status(200).json({ message: "Success", code: 200, data: rs });
  } catch(e){
    res.status(400).json({ message: "Error", code: 400, data: e });
  }
}
