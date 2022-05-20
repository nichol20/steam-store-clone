import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { GameDetail } from "./banners";

const gamesId = [915810, 1527950, 751780, 1276790, 1222140, 1604030, 728880, 233860, 1506830, 1237970, 1850570, 692890, 1651960, 1245620, 413150, 264710, 848450, 242760, 1174180, 1644960]

const steamApiUrl = (id: number) => `https://store.steampowered.com/api/appdetails/?appids=${id}`

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const gamesData: GameDetail[] = await Promise.all(gamesId.map(async id => {
    const reponse = await axios.get(steamApiUrl(id))
    return reponse.data[id]
  }))

  res.status(200).send(gamesData)
}