import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import steamcardsPromo from '../images/steamcards_promo.png'

export const StoreSidebar = () => {
  return (
    <div className='sidebar-container'>
      <div className="sidebar-header">
        <div className="steamcard-promo-image-container">
          <Image src={steamcardsPromo} alt="steam cards promo"/>
        </div>
        <div className='sidebar-categories'>Gift cards</div>
        <Link href="#" passHref><a className='sidebar-item'>Now Available on Steam</a></Link>
      </div>

      <div className="sidebar-categories">Recommended</div>
      <div className='sidebar-items'>
        <Link href="#" passHref>
          <a className='sidebar-item'>
            <span className='icon friends'></span>By Friends
          </a>
        </Link>
        <Link href="#" passHref>
          <a className='sidebar-item'>
            <span className='icon curators'></span>
            By Curators
          </a>
        </Link>
        <Link href="#" passHref>
          <a className='sidebar-item'>
            <span className='icon tags'></span>Tags
          </a>
        </Link>
      </div>

      <div className="sidebar-categories">Discovery queues</div>
      <div className='sidebar-items'>
        <Link href="#" passHref>
          <a className='sidebar-item'>
            <span className="icon queue"></span>Recommendations
          </a>
        </Link>
        <Link href="#" passHref>
          <a className='sidebar-item'>
            <span className="icon queue-new"></span>New Releases
          </a>
        </Link>
      </div>

      <div className="sidebar-categories">Broswe categories</div>
      <div className='sidebar-items'>
        <Link href="#" passHref>
          <a className='sidebar-item'>
            <span className="icon top-sellers"></span>Top Sellers
          </a>
        </Link>
        <Link href="#" passHref>
          <a className='sidebar-item'>
            <span className="icon recent"></span>New Releases
          </a>
        </Link>
        <Link href="#" passHref>
          <a className='sidebar-item'>
            <span className="icon upcoming"></span>Upcoming
          </a>
        </Link>
        <Link href="#" passHref>
          <a className='sidebar-item'>
            <span className="icon discounts"></span>Specials
          </a>
        </Link>
        <Link href="#" passHref>
          <a className='sidebar-item'>
            <span className="icon vr"></span>VR Titles
          </a>
        </Link>
        <Link href="#" passHref>
          <a className='sidebar-item'>
            <span className="icon controller"></span>Controller-Friendly
          </a>
        </Link>
      </div>
      
      <div className="sidebar-categories">Broswe by genre</div>
      <div className='sidebar-items'>
        <Link href="#" passHref><a className='sidebar-item'>Free to Play</a></Link>
        <Link href="#" passHref><a className='sidebar-item'>Early Acess</a></Link>
        <Link href="#" passHref><a className='sidebar-item'>Action</a></Link>
        <Link href="#" passHref><a className='sidebar-item'>Adventure</a></Link>
        <Link href="#" passHref><a className='sidebar-item'>Casual</a></Link>
        <Link href="#" passHref><a className='sidebar-item'>Indie</a></Link>
        <Link href="#" passHref><a className='sidebar-item'>Massively Multiplayer</a></Link>
        <Link href="#" passHref><a className='sidebar-item'>Racing</a></Link>
        <Link href="#" passHref><a className='sidebar-item'>RPG</a></Link>
        <Link href="#" passHref><a className='sidebar-item'>Simulation</a></Link>
        <Link href="#" passHref><a className='sidebar-item'>Sports</a></Link>
        <Link href="#" passHref><a className='sidebar-item'>Strategy</a></Link>
      </div>

      <div className="sidebar-categories">Recently viewed</div>
      <div className='sidebar-items'>
        <Link href="#" passHref><a className='sidebar-item'>last game</a></Link>
      </div>
    </div>
  )
}