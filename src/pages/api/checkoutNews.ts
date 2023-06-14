import { NextApiRequest, NextApiResponse } from "next";
import { fetchNewTitles } from "../../service/fetch";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
    ) {
    const titles =  fetchNewTitles();
    res.status(200).json(titles);
}