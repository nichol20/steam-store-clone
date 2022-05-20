import type { GetServerSideProps, NextPage } from 'next'
import axios from 'axios'

import { http } from '../util/http'
import { Header, StoreMain, StoreSidebar } from '../components'
import { GameDetail } from './api/banners'

interface HomeProps {
  gamesData: GameDetail[]
  specialOffers: GameDetail[]
}

const Home: NextPage<HomeProps> = ({ gamesData, specialOffers }) => {
  return (
    <div className='steam-container'>
      <Header />
      <div className="store-container">
        <StoreSidebar />
        <StoreMain gamesData={gamesData} specialOffers={specialOffers} />
      </div>
    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await http.get('/api/banners')
  const { data: specialOffers } = await http.get('/api/special-offers')

  return {
    props: {
      gamesData: data,
      specialOffers: specialOffers
    }
  }
}