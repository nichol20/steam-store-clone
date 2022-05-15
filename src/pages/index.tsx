import type { NextPage } from 'next'
import { Header, StoreMain, StoreSidebar } from '../components'

const Home: NextPage = () => {
  return (
    <div className='steam-container'>
      <Header />
      <div className="store-container">
        <StoreSidebar />
        <StoreMain />
      </div>
    </div>
  )
}

export default Home
