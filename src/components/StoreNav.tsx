import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import searchIcon from '../images/search_icon.png'

export const StoreNav = () => {

  const showYourstoreSubmenu = () => {
    (document.querySelector('.store-nav-your_store-submenu-container') as HTMLDivElement).style.display = 'block'
  }

  const closeYourstoreSubmenu = () => {
    (document.querySelector('.store-nav-your_store-submenu-container') as HTMLDivElement).style.display = 'none'
  }

  const showNewandnoteworthySubmenu = () => {
    (document.querySelector('.store-nav-new_noteworthy-submenu-container') as HTMLDivElement).style.display = 'block'
  }

  const closeNewandnoteworthySubmenu = () => {
    (document.querySelector('.store-nav-new_noteworthy-submenu-container') as HTMLDivElement).style.display = 'none'
  }

  const showCategoriesSubmenu = () => {
    (document.querySelector('.store-nav-categories-submenu-container') as HTMLDivElement).style.display = 'flex'
  }

  const closeCategoriesSubmenu = () => {
    (document.querySelector('.store-nav-categories-submenu-container') as HTMLDivElement).style.display = 'none'
  }

  return (
    <div className='store-nav-container'>
      <ul className='store-nav-items'>
        <li
         className="store-nav-item"
         onMouseOver={showYourstoreSubmenu}
         onMouseOut={closeYourstoreSubmenu}
        >Your Store</li>
        <li
         className="store-nav-item"
         onMouseOver={showNewandnoteworthySubmenu}
         onMouseOut={closeNewandnoteworthySubmenu}
        >New & Noteworthy</li>
        <li
         className="store-nav-item"
         onMouseOver={showCategoriesSubmenu}
         onMouseOut={closeCategoriesSubmenu}
        >Categories</li>
        <li className="store-nav-item"><Link href="#">Points Shop</Link></li>
        <li className="store-nav-item"><Link href="#">News</Link></li>
        <li className="store-nav-item"><Link href="#">Labs</Link></li>

        <div
         className="store-nav-your_store-submenu-container"
         onMouseOver={showYourstoreSubmenu}
         onMouseOut={closeYourstoreSubmenu}
        >
          <ul className="store-nav-your_store-submenu-list">
            <li className="store-nav-your_store-submenu-item"><Link href="#">Home</Link></li>
            <li className="store-nav-your_store-submenu-item"><Link href="#">Community Recommendations</Link></li>
            <li className="store-nav-your_store-submenu-item"><Link href="#">Recently Viewed</Link></li>
            <li className="store-nav-your_store-submenu-item"><Link href="#">Steam Curators</Link></li>
          </ul>
        </div>

        <div
         className="store-nav-new_noteworthy-submenu-container"
         onMouseOver={showNewandnoteworthySubmenu}
         onMouseOut={closeNewandnoteworthySubmenu}
        >
          <ul className="store-nav-new_noteworthy-submenu-list">
            <li className="store-nav-new_noteworthy-submenu-item"><Link href="#">Top Sellers</Link></li>
            <li className="store-nav-new_noteworthy-submenu-item"><Link href="#">New & Trending</Link></li>
            <li className="store-nav-new_noteworthy-submenu-item"><Link href="#">Current Specials</Link></li>
            <li className="store-nav-new_noteworthy-submenu-item"><Link href="#">Special Updated</Link></li>
            <li className="store-nav-new_noteworthy-submenu-item"><Link href="#">Popular Upcoming</Link></li>
          </ul>
        </div>

        <div
         className="store-nav-categories-submenu-container"
         onMouseOver={showCategoriesSubmenu}
         onMouseOut={closeCategoriesSubmenu}
        >
          <div className="special_sections-container">
            <ul className="store-nav-categories-submenu-list">
              <h3 className='store-nav-categories-submenu-title'>Special Sections</h3>
              <li className="store-nav-categories-submenu-item">
                <Link href="#">Free to Play</Link>
              </li>
              <li className="store-nav-categories-submenu-item">
                <Link href="#">Demos</Link>
              </li>
              <li className="store-nav-categories-submenu-item">
                <Link href="#">Early Acess</Link>
              </li>
              <li className="store-nav-categories-submenu-item">
                <Link href="#">Controller-Friendly</Link>
              </li>
              <li className="store-nav-categories-submenu-item">
                <Link href="#">Remote Play</Link>
              </li>
              <li className="store-nav-categories-submenu-item">
                <Link href="#">Software</Link>
              </li>
              <li className="store-nav-categories-submenu-item">
                <Link href="#">Soundtracks</Link>
              </li>
              <li className="store-nav-categories-submenu-item">
                <Link href="#">VR Titles</Link>
              </li>
              <li className="store-nav-categories-submenu-item">
                <Link href="#">VR Hardware</Link>
              </li>
              <li className="store-nav-categories-submenu-item">
                <Link href="#">Steam Deck</Link>
              </li>
              <li className="store-nav-categories-submenu-item">
                <Link href="#">Great on Deck</Link>
              </li>
              <li className="store-nav-categories-submenu-item">
                <Link href="#">macOS</Link>
              </li>
              <li className="store-nav-categories-submenu-item">
                <Link href="#">SteamOS + Linux</Link>
              </li>
              <li className="store-nav-categories-submenu-item">
                <Link href="#">For PC Cafés</Link>
              </li>
            </ul>
          </div>

          <div className="genres-container">
            <ul className="store-nav-categories-submenu-list">
              <h3 className='store-nav-categories-submenu-title'>Genres</h3>
              <li className="store-nav-categories-submenu-item subcategory">
                <Link href="#">Actions</Link>
              </li>
              <li className="store-nav-categories-submenu-item">
                <Link href="#">Action Rogue-Like</Link>
              </li>
              <li className="store-nav-categories-submenu-item">
                <Link href="#">Arcade & Rhythm</Link>
              </li>
              <li className="store-nav-categories-submenu-item">
                <Link href="#">{"Beat 'Em Up"}</Link>
              </li>
              <li className="store-nav-categories-submenu-item">
                <Link href="#">Fighting and & Martial </Link>
              </li>
              <li className="store-nav-categories-submenu-item">
                <Link href="#">First-Person Shooter</Link>
              </li>
              <li className="store-nav-categories-submenu-item">
                <Link href="#">Platformer & Runner</Link>
              </li>
              <li className="store-nav-categories-submenu-item">
                <Link href="#">Third-Person Shooter</Link>
              </li>

              <li className="store-nav-categories-submenu-item"></li>
              <li className="store-nav-categories-submenu-item"></li>

              <li className="store-nav-categories-submenu-item subcategory">
                <Link href="#">Adventure & Casual</Link>
              </li>
              <li className="store-nav-categories-submenu-item">
                <Link href="#">Adventure</Link>
              </li>
              <li className="store-nav-categories-submenu-item">
                <Link href="#">Adventure RPG</Link>
              </li>
              <li className="store-nav-categories-submenu-item">
                <Link href="#">Casual</Link>
              </li>
              <li className="store-nav-categories-submenu-item">
                <Link href="#">Metroidvania</Link>
              </li>
              <li className="store-nav-categories-submenu-item">
                <Link href="#">Puzzle</Link>
              </li>
              <li className="store-nav-categories-submenu-item">
                <Link href="#">Story-Rich</Link>
              </li>
              <li className="store-nav-categories-submenu-item">
                <Link href="#">Visual Novel</Link>
              </li>
            </ul>

            <ul className="store-nav-categories-submenu-list">
              <li className="store-nav-categories-submenu-item subcategory">
                <Link href="#">Role-Playing</Link>
              </li>
              <li className="store-nav-categories-submenu-item">
                <Link href="#">Action RPG</Link>
              </li>
              <li className="store-nav-categories-submenu-item">
                <Link href="#">Adventure RPG</Link>
              </li>
              <li className="store-nav-categories-submenu-item">
                <Link href="#">JRPG</Link>
              </li>
              <li className="store-nav-categories-submenu-item">
                <Link href="#">Party-Based</Link>
              </li>
              <li className="store-nav-categories-submenu-item">
                <Link href="#">Rogue-Like</Link>
              </li>
              <li className="store-nav-categories-submenu-item">
                <Link href="#">Strategy RPG</Link>
              </li>
              <li className="store-nav-categories-submenu-item">
                <Link href="#">Turn Based</Link>
              </li>

              <li className="store-nav-categories-submenu-item"></li>
              <li className="store-nav-categories-submenu-item"></li>

              <li className="store-nav-categories-submenu-item subcategory">
                <Link href="#">Simulation</Link>
              </li>
              <li className="store-nav-categories-submenu-item ">
                <Link href="#">Building & Automation</Link>
              </li>
              <li className="store-nav-categories-submenu-item">
                <Link href="#">Dating</Link>
              </li>
              <li className="store-nav-categories-submenu-item">
                <Link href="#">Farming & Crafting</Link>
              </li>
              <li className="store-nav-categories-submenu-item">
                <Link href="#">Hobby & Job</Link>
              </li>
              <li className="store-nav-categories-submenu-item">
                <Link href="#">Life & Immersive</Link>
              </li>
              <li className="store-nav-categories-submenu-item">
                <Link href="#">Sandbox & Physics</Link>
              </li>
              <li className="store-nav-categories-submenu-item">
                <Link href="#">Space & Flight</Link>
              </li>
            </ul>

            <ul className="store-nav-categories-submenu-list">
              <li className="store-nav-categories-submenu-item subcategory">
                <Link href="#">Strategy</Link>
              </li>
              <li className="store-nav-categories-submenu-item">
                <Link href="#">Card & Board</Link>
              </li>
              <li className="store-nav-categories-submenu-item">
                <Link href="#">City & Settlement</Link>
              </li>
              <li className="store-nav-categories-submenu-item">
                <Link href="#">Grand & 4X</Link>
              </li>
              <li className="store-nav-categories-submenu-item">
                <Link href="#">Military</Link>
              </li>
              <li className="store-nav-categories-submenu-item">
                <Link href="#">Real-Time Strategy</Link>
              </li>
              <li className="store-nav-categories-submenu-item">
                <Link href="#">Tower Defense</Link>
              </li>
              <li className="store-nav-categories-submenu-item">
                <Link href="#">Turn-Based Strategy</Link>
              </li>

              <li className="store-nav-categories-submenu-item"></li>
              <li className="store-nav-categories-submenu-item"></li>

              <li className="store-nav-categories-submenu-item subcategory">
                <Link href="#">Sports & Racing</Link>
              </li>
              <li className="store-nav-categories-submenu-item ">
                <Link href="#">All Sports</Link>
              </li>
              <li className="store-nav-categories-submenu-item">
                <Link href="#">Fisihing & Hunting</Link>
              </li>
              <li className="store-nav-categories-submenu-item">
                <Link href="#">Individual Sports</Link>
              </li>
              <li className="store-nav-categories-submenu-item">
                <Link href="#">Racing</Link>
              </li>
              <li className="store-nav-categories-submenu-item">
                <Link href="#">Racing Sim</Link>
              </li>
              <li className="store-nav-categories-submenu-item">
                <Link href="#">Sports</Link>
              </li>
              <li className="store-nav-categories-submenu-item">
                <Link href="#">Team Sports</Link>
              </li>
            </ul>
          </div>

          <div className="themes-and-player_support-container">
            <ul className="store-nav-categories-submenu-list">
              <h3 className='store-nav-categories-submenu-title'>Themes</h3>
              <li className="store-nav-categories-submenu-item">
                <Link href="#">Anime</Link>
              </li>
              <li className="store-nav-categories-submenu-item">
                <Link href="#">Going Rogue</Link>
              </li>
              <li className="store-nav-categories-submenu-item">
                <Link href="#">Horror</Link>
              </li>
              <li className="store-nav-categories-submenu-item">
                <Link href="#">Mistery & Detective</Link>
              </li>
              <li className="store-nav-categories-submenu-item">
                <Link href="#">Open World</Link>
              </li>
              <li className="store-nav-categories-submenu-item">
                <Link href="#">Sci-Fi & Cyberpunk</Link>
              </li>
              <li className="store-nav-categories-submenu-item">
                <Link href="#">Space</Link>
              </li>
              <li className="store-nav-categories-submenu-item">
                <Link href="#">Survival</Link>
              </li>
            </ul>

            <ul className="store-nav-categories-submenu-list">
              <h3 className='store-nav-categories-submenu-title'>Player Support</h3>
              <li className="store-nav-categories-submenu-item">
                <Link href="#">Co-Operative</Link>
              </li>
              <li className="store-nav-categories-submenu-item">
                <Link href="#">LAN</Link>
              </li>
              <li className="store-nav-categories-submenu-item">
                <Link href="#">Local & Party</Link>
              </li>
              <li className="store-nav-categories-submenu-item">
                <Link href="#">MMO</Link>
              </li>
              <li className="store-nav-categories-submenu-item">
                <Link href="#">Multiplayer</Link>
              </li>
              <li className="store-nav-categories-submenu-item">
                <Link href="#">Online Competitive</Link>
              </li>
              <li className="store-nav-categories-submenu-item">
                <Link href="#">Singleplayer</Link>
              </li>
            </ul>
          </div>
        </div>
      </ul>

      <div className="store-nav-search-box">
        <input type="text" className='store-nav-search-input' placeholder='search' />
        <Link href="#" passHref>
          <a>
            <Image 
              src={searchIcon}
              alt='search icon'
            />
          </a>
        </Link>
      </div>
    </div>
  )
}

