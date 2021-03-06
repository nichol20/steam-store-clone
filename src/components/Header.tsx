import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import logoSteam from '../images/logo_steam.svg'

export const Header = () => {
  const [ opacityLanguageModal, setOpacityLanguageModal ] = useState('1')

  const showStoreSubmenu = () => {
    (document.querySelector('.nav-store-submenu-container') as HTMLDivElement).style.opacity = '1';
    (document.querySelector('.nav-store-submenu-container') as HTMLDivElement).style.pointerEvents = 'all';
  }

  const closeStoreSubmenu = () => {
    (document.querySelector('.nav-store-submenu-container') as HTMLDivElement).style.opacity = '0';
    (document.querySelector('.nav-store-submenu-container') as HTMLDivElement).style.pointerEvents = 'none';
  }
  
  const showCommunitySubmenu = () => {
    (document.querySelector('.nav-community-submenu-container') as HTMLDivElement).style.opacity = '1';
    (document.querySelector('.nav-community-submenu-container') as HTMLDivElement).style.pointerEvents = 'all';
  }

  const closeCommunitySubmenu = () => {
    (document.querySelector('.nav-community-submenu-container') as HTMLDivElement).style.opacity = '0';
    (document.querySelector('.nav-community-submenu-container') as HTMLDivElement).style.pointerEvents = 'none';
  }

  const toggleLanguageOptionSubmenu = () => {
    (document.querySelector('.language-option-submenu-container') as HTMLDivElement).style.opacity = opacityLanguageModal

    if(opacityLanguageModal === '1') {
      (document.querySelector('.language-option-submenu-container') as HTMLDivElement).style.pointerEvents = 'all'
      setOpacityLanguageModal('0');
    }
    else {
      (document.querySelector('.language-option-submenu-container') as HTMLDivElement).style.pointerEvents = 'none'
      setOpacityLanguageModal('1');
    }
  }
  
  return (
    <header className='steam-header'>
      <div className="content">  
        <div className="logo-container">
          <Image src={logoSteam} alt="logo" />
        </div>
        <nav className='nav-container'>
          <ul className='nav-container-menu'>
            <li
             className='nav-container-item'
             onMouseOver={showStoreSubmenu}
             onMouseOut={closeStoreSubmenu}
            >
               <Link href="#">Store</Link>
            </li>
            <li
             className='nav-container-item'
             onMouseOver={showCommunitySubmenu}
             onMouseOut={closeCommunitySubmenu}
            >
              <Link href="#">Community</Link>
            </li>
            <li className='nav-container-item'><Link href="#">About</Link></li>
            <li className='nav-container-item'><Link href="#">Support</Link></li>
            <div
             className="nav-store-submenu-container" 
             onMouseOver={showStoreSubmenu} 
             onMouseOut={closeStoreSubmenu} 
            >
              <ul className='nav-store-submenu-list'>
                <li className='nav-store-submenu-item'><Link href="#">Home</Link></li>
                <li className='nav-store-submenu-item'><Link href="#">Discovery queue</Link></li>
                <li className='nav-store-submenu-item'><Link href="#">Wishlist</Link></li>
                <li className='nav-store-submenu-item'><Link href="#">Points shop</Link></li> 
                <li className='nav-store-submenu-item'><Link href="#">News</Link></li>
                <li className='nav-store-submenu-item'><Link href="#">Stats</Link></li>
              </ul>
            </div>
            <div
             className="nav-community-submenu-container"
             onMouseOver={showCommunitySubmenu}
             onMouseOut={closeCommunitySubmenu}
            >
              <ul className='nav-community-submenu-list'>
                  <li className='nav-community-submenu-item'><Link href="#">Home</Link></li>
                  <li className='nav-community-submenu-item'><Link href="#">Discussions</Link></li>
                  <li className='nav-community-submenu-item'><Link href="#">Workshop</Link></li>
                  <li className='nav-community-submenu-item'><Link href="#">Market</Link></li> 
                  <li className='nav-community-submenu-item'><Link href="#">Broadcast</Link></li>
              </ul>
            </div>
          </ul>
        </nav>
        <div className="actions-header">
          <button className="install-steam-button">Install Steam</button>
          <div>
            <Link href="#">login</Link>
            {" | "}
            <div className="language-option" >
              <span onClick={toggleLanguageOptionSubmenu}>language</span>
              <div className="language-option-submenu-container">
                <ul className="language-option-submenu-list">
                  <li className='language-option-submenu-item'><Link href="#">???????????? (Simplified Chinese)</Link></li>
                  <li className='language-option-submenu-item'><Link href="#">???????????? (Traditional Chinese)</Link></li>
                  <li className='language-option-submenu-item'><Link href="#">????????? (Japanese)</Link></li>
                  <li className='language-option-submenu-item'><Link href="#">????????? (Korean)</Link></li>
                  <li className='language-option-submenu-item'><Link href="#">????????? (Thai)</Link></li>
                  <li className='language-option-submenu-item'><Link href="#">?????????????????? (Bulgarian)</Link></li>
                  <li className='language-option-submenu-item'><Link href="#">??e??tina (Czech)</Link></li>
                  <li className='language-option-submenu-item'><Link href="#">Dansk (Danish)</Link></li>
                  <li className='language-option-submenu-item'><Link href="#">Deutsch (German)</Link></li>
                  <li className='language-option-submenu-item'><Link href="#">Espa??ol - Espa??a (Spanish - Spain)</Link></li>
                  <li className='language-option-submenu-item'><Link href="#">Espa??ol - Latinoam??rica (Spanish - Latin America)</Link></li>
                  <li className='language-option-submenu-item'><Link href="#">???????????????? (Greek)</Link></li>
                  <li className='language-option-submenu-item'><Link href="#">Fran??ais (French)</Link></li>
                  <li className='language-option-submenu-item'><Link href="#">Italiano (Italian)</Link></li>
                  <li className='language-option-submenu-item'><Link href="#">Magyar (Hungarian)</Link></li>
                  <li className='language-option-submenu-item'><Link href="#">Nederlands (Dutch)</Link></li>
                  <li className='language-option-submenu-item'><Link href="#">Norsk (Norwegian)</Link></li>
                  <li className='language-option-submenu-item'><Link href="#">Polski (Polish)</Link></li>
                  <li className='language-option-submenu-item'><Link href="#">Portugu??s (Portuguese)</Link></li>
                  <li className='language-option-submenu-item'><Link href="#">Portugu??s - Brasil (Portuguese - Brazil)</Link></li>
                  <li className='language-option-submenu-item'><Link href="#">Rom??n?? (Romanian)</Link></li>
                  <li className='language-option-submenu-item'><Link href="#">?????????????? (Russian)</Link></li>
                  <li className='language-option-submenu-item'><Link href="#">Suomi (Finnish)</Link></li>
                  <li className='language-option-submenu-item'><Link href="#">Svenska (Swedish)</Link></li>
                  <li className='language-option-submenu-item'><Link href="#">T??rk??e (Turkish)</Link></li>
                  <li className='language-option-submenu-item'><Link href="#">Ti???ng Vi???t (Vietnamese)</Link></li>
                  <li className='language-option-submenu-item'><Link href="#">???????????????????? (Ukrainian)</Link></li>
                  <li className='language-option-submenu-item'><Link href="#">Report a translation problem</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}