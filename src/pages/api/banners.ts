import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

const gamesId = [730, 1245620, 413150, 238960, 570, 264710, 848450, 242760, 1174180, 1644960, 1222140]

const steamApiUrl = (id: number) => `https://store.steampowered.com/api/appdetails/?appids=${id}`

interface Screenshot {
  id: number
  path_thumbnail: string
  path_full: string
}

interface Category {
  id: number
  description: string
}

interface Genre {
  id: number
  description: string
}

export interface GameDetail {
  data: {
    type: string
    name: string
    steam_appid: number
    required_age: number
    is_free: boolean
    detailed_description: string
    about_the_game: string
    short_description: string
    header_image: string
    platforms: {
      windows: boolean
      mac: boolean
      linux: boolean
    }
    screenshots: Screenshot[]
    categories: Category[]
    genres: Genre[]
    release_date: {
      coming_soon: boolean
      date: string
    }
    price_overview?: {
      currency: string,
      initial: number,
      final: number,
      discount_percent: number,
      initial_formatted: string,
      final_formatted: string
    }
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const gamesData: GameDetail[] = await Promise.all(gamesId.map(async id => {
    const reponse = await axios.get(steamApiUrl(id))
    return reponse.data[id]
  }))

  res.status(200).send(gamesData)
}