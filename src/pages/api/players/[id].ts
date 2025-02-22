import type { NextApiRequest, NextApiResponse } from "next";
export const runtime = "edge";
type ResponseData = {
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const { id } = req.query;
  res.status(200).json({ message: `This is from player ${id}` });
}
