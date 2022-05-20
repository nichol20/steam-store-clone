import React from 'react'
import { StoreNav } from './StoreNav'

import { GameDetail } from '../pages/api/banners'
import { MainBanner } from './MainBanner'
import { SpecialOffers } from './SpecialOffers'

interface StoreMainProps {
  gamesData: GameDetail[]
  specialOffers: GameDetail[]
}

export const StoreMain = ({ gamesData, specialOffers }: StoreMainProps) => {

  return (
    <div className='store-main-container'>
      <StoreNav />
      <MainBanner gamesData={gamesData}/>
      <SpecialOffers gamesData={specialOffers}/>
    </div>
  )
}