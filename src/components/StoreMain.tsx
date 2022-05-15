import Image from 'next/image'
import React, { MouseEvent, useEffect, useState } from 'react'
import { StoreNav } from './StoreNav'

import banner from './banner.jpg'

export const StoreMain = () => {
  const mainBanners = Array(12).fill('')

  const handleCarouselThumbs = (e: MouseEvent) => {
    Array.from(document.querySelector('.carousel-thumbs')!.children).forEach(thumb => {
      thumb.classList.remove('focus')
    });
    (e.target as HTMLDivElement).classList.add('focus');
  }

  return (
    <div className='store-main-container'>
      <StoreNav />

      <section className="main-banner-container">
        <h2 className='section-title'>Featured & Recommended</h2>
        <div className="main-banner-box">
          <div className="arrow-left"><div></div></div>
          <div className="arrow-right"><div></div></div>
          <div className="main-banner-image-container">
            <Image src={banner} alt="" width="616px" height="353px" objectFit='cover'/>
          </div>
          <div className="main-banner-info">
            <h3 className='game-name'>Path of Exile</h3>
            <div className="screenshots">
              <Image src={banner} alt="" width="162px" height="69px"/>
              <Image src={banner} alt="" width="162px" height="69px"/>
              <Image src={banner} alt="" width="162px" height="69px"/>
              <Image src={banner} alt="" width="162px" height="69px"/>
            </div>
            <div className="reason">
              <div className="main">Now Available</div>
              <div className="additional">Top Seller</div>
            </div>
          </div>
          <div className="carousel-thumbs">
            {
              mainBanners.map((_, index) => {
                return(
                  <div key={index} onClick={handleCarouselThumbs}></div>
                )
              })
            }
          </div>
        </div>
      </section>
    </div>
  )
}