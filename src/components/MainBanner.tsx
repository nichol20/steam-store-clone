import Image from 'next/image'
import React, { MouseEvent, useEffect, useState } from 'react'
import { GameDetail } from '../pages/api/banners'

interface MainBannerProps {
  gamesData: GameDetail[]
}

export const MainBanner = ({ gamesData }: MainBannerProps) => {
  const [ currentGameBannerIndex, setCurrentGameBannerIndex ] = useState(0)
  const [ currentBannerImage, setCurrentBannerImage ] = useState(gamesData[currentGameBannerIndex].data.header_image)
  const [ currentInfocardScreenshotIndex, setCurrentInfocardScreenshotIndex ] = useState(0)

  const tags = gamesData[currentGameBannerIndex].data.categories.filter(category => ["Multi-player", "Coop", "Single-player","Online Co-op", "Online PvP", "Co-op", "PvP"].includes(category.description))
  tags.push(...gamesData[currentGameBannerIndex].data.genres)
     

  const showInfoCard = () => {
    (document.querySelector('.info-card') as HTMLDivElement).style.opacity = '1';
  }

  const closeInfoCard = () => {
    (document.querySelector('.info-card') as HTMLDivElement).style.opacity = '0';
  }

  const handleClickCarouselThumb = (e: MouseEvent) => {
    const thumbsArray = Array.from(document.querySelector('.carousel-thumbs')!.children)

    thumbsArray.forEach(thumb => {
      thumb.classList.remove('focus')
    });

    (e.target as HTMLDivElement).classList.add('focus');

    thumbsArray.forEach((thumb, index) => {
      thumb.classList.forEach(t => { 
        if(t.includes('focus')) setCurrentGameBannerIndex(index)
      })
    })
  }
  
  const handleArrowClickCarrouselThumb = (action: string) => {
    let currentFocusIndex : number = 0
    const thumbsArray = Array.from(document.querySelector('.carousel-thumbs')!.children)
    
    thumbsArray.forEach((thumb, index) => {
      thumb.classList.forEach(t => { 
        if(t.includes('focus')) {
          if(action === 'next') currentFocusIndex = index + 1
          else currentFocusIndex = index - 1
        }
      })
      thumb.classList.remove('focus')
    })

    if(currentFocusIndex === thumbsArray.length) currentFocusIndex = 0
    if(currentFocusIndex < 0) currentFocusIndex = thumbsArray.length - 1

    setCurrentGameBannerIndex(currentFocusIndex)
    thumbsArray[currentFocusIndex].classList.add('focus')
  }

  const handleOnMouseOverInScreenshots = (e: MouseEvent) => {
    setCurrentBannerImage((e.target as HTMLImageElement).src)
  }

  const handleOnMouseOutInScreenshots = () => {
    setCurrentBannerImage(gamesData[currentGameBannerIndex].data.header_image)
  }

  useEffect(() => {
      setInterval(() => handleArrowClickCarrouselThumb('next'), 10000)
      setInterval(() => {
        setCurrentInfocardScreenshotIndex(prevState => {
          if(prevState >= 3) return 0
          else return prevState + 1
        })
      }, 1000)
  }, [])

  useEffect(() => {
    setCurrentBannerImage(gamesData[currentGameBannerIndex].data.header_image)
  }, [ currentGameBannerIndex, gamesData ])

  return (
    <section className="main-banner-container">
        <h2 className='section-title'>Featured & Recommended</h2>
        <div className="main-banner-box">
          <div className="arrow-left" onClick={() => handleArrowClickCarrouselThumb('previous')}><div></div></div>
          <div className="arrow-right" onClick={() => handleArrowClickCarrouselThumb('next')}><div></div></div>
          <div className="info-card">
            <h4 className='game-name'>{gamesData[currentGameBannerIndex].data.name}</h4>
            <span className="released-date">
              Released:{' '}
              {gamesData[currentGameBannerIndex].data.release_date.date.replace('/', ' ').replace('.', ',')}
            </span>
            <div className="screenshot-container">
              <Image src={gamesData[currentGameBannerIndex].data.screenshots[currentInfocardScreenshotIndex].path_full} alt="" width={274} height={153} />
            </div>
            <div className="reviews-container">
              Overall user reviews: <br />
              <span>Very Positive</span> {'(826 reviews)'}
            </div>

            <div className="tags-container">
              <span>User tags:</span>
              <div className="tags">
                {
                  tags.slice(0, 4).map((category, index) => {
                    return (<div className='tag' key={index}>{category.description.replace('-', '')}</div>)
                  })
                }
              </div>
            </div>
            <div className="arrow-right"></div>
          </div>

          <div className="main-banner-image-container" onMouseOver={showInfoCard} onMouseOut={closeInfoCard}>
            <Image src={currentBannerImage} alt="" width="616px" height="353px"/>
          </div>
          <div className="main-banner-info" onMouseOver={showInfoCard} onMouseOut={closeInfoCard}>
            <h3 className='game-name'>{gamesData[currentGameBannerIndex].data.name}</h3>
            <div className="screenshots">
              <div className="screenshot-container">
                <Image
                src={gamesData[currentGameBannerIndex].data.screenshots[0].path_full} 
                alt="" 
                width="1920" 
                height="1080"
                onMouseOver={handleOnMouseOverInScreenshots}
                onMouseOut={handleOnMouseOutInScreenshots}
                />
              </div>
              <div className="screenshot-container">
                <Image
                src={gamesData[currentGameBannerIndex].data.screenshots[1].path_full} 
                alt="" 
                width="1920" 
                height="1080"
                onMouseOver={handleOnMouseOverInScreenshots}
                onMouseOut={handleOnMouseOutInScreenshots}
                />
              </div>
              <div className="screenshot-container">
                <Image
                src={gamesData[currentGameBannerIndex].data.screenshots[2].path_full} 
                alt="" 
                width="1920" 
                height="1080"
                onMouseOver={handleOnMouseOverInScreenshots}
                onMouseOut={handleOnMouseOutInScreenshots}
                />
              </div>
              <div className="screenshot-container">
                <Image
                src={gamesData[currentGameBannerIndex].data.screenshots[3].path_full} 
                alt="" 
                width="1920" 
                height="1080"
                onMouseOver={handleOnMouseOverInScreenshots}
                onMouseOut={handleOnMouseOutInScreenshots}
                />
              </div>
            </div>
            <div className="reason">
              <div className="main">Now Available</div>
              <div className="additional">Top Seller</div>
            </div>
            <div className="price">
              {
                gamesData[currentGameBannerIndex].data.is_free
                ? 'Free to Play'
                : gamesData[currentGameBannerIndex].data.price_overview?.final_formatted
              }
            </div>
          </div>
          <div className="carousel-thumbs">
            {
              gamesData.map((_, index) =>
                <div
                 key={index} 
                 onClick={handleClickCarouselThumb} 
                 className={index === 0 ? 'focus' : ''}
                >
                </div>
              )
            }
          </div>
        </div>
    </section>
  )
}