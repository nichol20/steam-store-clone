import Image from 'next/image'
import React, { MouseEvent, useState } from 'react'
import { GameDetail } from '../pages/api/banners'

interface SpecialOffersProps {
  gamesData: GameDetail[]
}

const infoCard = (game: GameDetail) => {
  const id = `${game.data.name.replace(/[\s™:!']/g,'')}`

  const tags = game.data.categories.filter(category => ["Multi-player", "Coop", "Single-player","Online Co-op", "Online PvP", "Co-op", "PvP"].includes(category.description))
  tags.push(...game.data.genres)

  return (
    <div className="info-card" id={id}>
      <h4 className='game-name'>{game.data.name}</h4>
      <span className="released-date">
        Released:{' '}
        {game.data.release_date.date.replace('/', ' ').replace('.', ',')}
      </span>
      <div className="screenshot-container">
        <Image src={game.data.screenshots[0].path_full} alt="" width={274} height={153} />
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
      <div className="arrow-left"></div>
    </div>
  )
}

export const SpecialOffers = ({ gamesData }: SpecialOffersProps) => {
  const [ currentBannerIndex, setCurrentBannerIndex ] = useState(0)
  const banners = [gamesData.slice(0, 4), gamesData.slice(4, 8), gamesData.slice(8, 14), gamesData.slice(14, 20)]

  const showInfoCard = (id: string) => {
    (document.querySelector(`#${id}`) as HTMLDivElement).style.opacity = '1';
  }

  const closeInfoCard = (id:string) => {
    (document.querySelector(`#${id}`) as HTMLDivElement).style.opacity = '0';
  }

  const handleClickCarouselThumb = (e: MouseEvent) => {
    const thumbsArray = Array.from(document.querySelector('.carousel-thumbs-special-offers')!.children)

    thumbsArray.forEach(thumb => {
      thumb.classList.remove('focus')
    });

    (e.target as HTMLDivElement).classList.add('focus');

    thumbsArray.forEach((thumb, index) => {
      thumb.classList.forEach(t => { 
        if(t.includes('focus')) setCurrentBannerIndex(index)
      })
    })
  }
  
  const handleArrowClickCarrouselThumb = (action: string) => {
    let currentFocusIndex : number = 0
    const thumbsArray = Array.from(document.querySelector('.carousel-thumbs-special-offers')!.children)
    
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

    setCurrentBannerIndex(currentFocusIndex)
    thumbsArray[currentFocusIndex].classList.add('focus')
  }

  return (
    <section className="special-offers-container">
        <div className="special-offers-header">
          <h2 className='section-title'>Special Offers</h2>
          <button className="broswe-more">Broswe more</button>
        </div>
        <div className="special-offers-box">
          <div className="arrow-left" onClick={() => handleArrowClickCarrouselThumb('previous')}><div></div></div>
          <div className="arrow-right" onClick={() => handleArrowClickCarrouselThumb('next')}><div></div></div>
          <div className="special-offers-columns-container">
            {
              banners[currentBannerIndex].map((game, index) => {
                switch(currentBannerIndex) {
                  case 0:
                  case 1:
                    if(index < 2) {
                      return (
                        <div className="column" key={index}>
                          <div
                           className="large-special-offer"  
                           onMouseOver={() => showInfoCard(game.data.name.replace(/[\s™:!']/g,''))}
                           onMouseOut={() => closeInfoCard(game.data.name.replace(/[\s™:!']/g,''))}
                          >
                            <Image src={game.data.header_image} width={306} height={350} alt="" objectFit='cover'/>
                            <div className="informations">
                              <h3>Midweek Madness</h3>
                              <span>Offer ends 24 May @ 2:00pm.</span>
                              <div className="discount-block">
                                <div className="discount-percentage">-100%</div>
                                <div className="discount-prices">
                                  <div className="original-price">{game.data.price_overview?.final_formatted}</div>
                                  <div className="final-price">$0.00</div>
                                </div>
                              </div>
                            </div>
                            { infoCard(game) }
                          </div>
                        </div>
                      )
                    } 

                    if(index === 2) {
                      return (
                        <div className="column" key={index} >
                          <div
                           className="special-offer"
                           onMouseOver={() => showInfoCard(game.data.name.replace(/[\s™:!']/g,''))}
                           onMouseOut={() => closeInfoCard(game.data.name.replace(/[\s™:!']/g,''))}
                          >
                            <Image src={game.data.header_image} alt="" width={306} height={143} objectFit='cover'/>
                            <div className="informations">
                              <div className="discount-block">
                                <div className="discount-percentage">-100%</div>
                                <div className="discount-prices">
                                  <div className="original-price">{game.data.price_overview?.final_formatted}</div>
                                  <div className="final-price">$0.00</div>
                                </div>
                              </div>
                            </div>
                            { infoCard(game) }
                          </div>
                          <div
                           className="special-offer"
                           onMouseOver={() => showInfoCard(banners[currentBannerIndex][index + 1].data.name.replace(/[\s™:!']/g,''))}
                           onMouseOut={() => closeInfoCard(banners[currentBannerIndex][index + 1].data.name.replace(/[\s™:!']/g,''))}
                          >
                            <Image src={banners[currentBannerIndex][index + 1].data.header_image} alt="" width={306} height={143} objectFit='cover'/>
                            <div className="informations">
                              <div className="discount-block">
                                <div className="discount-percentage">-100%</div>
                                <div className="discount-prices">
                                  <div className="original-price">{banners[currentBannerIndex][index + 1].data.price_overview?.final_formatted}</div>
                                  <div className="final-price">$0.00</div>
                                </div>
                              </div>
                            </div>
                            { infoCard(banners[currentBannerIndex][index + 1]) }
                          </div>
                        </div>
                      )
                    }
                    break;

                  case 2:
                  case 3:
                    if(index === 0 || index === 2 || index === 4) {
                      return (
                        <div className="column" key={index}>
                          <div
                           className="special-offer"
                           onMouseOver={() => showInfoCard(game.data.name.replace(/[\s™:!']/g,''))}
                           onMouseOut={() => closeInfoCard(game.data.name.replace(/[\s™:!']/g,''))}
                          >
                            <Image src={game.data.header_image} alt="" width={306} height={143} objectFit='cover'/>
                            <div className="informations">
                              <div className="discount-block">
                                <div className="discount-percentage">-100%</div>
                                <div className="discount-prices">
                                  <div className="original-price">{game.data.price_overview?.final_formatted}</div>
                                  <div className="final-price">$0.00</div>
                                </div>
                              </div>
                            </div>
                            { infoCard(game) }
                          </div>
                          <div
                           className="special-offer"
                           onMouseOver={() => showInfoCard(banners[currentBannerIndex][index + 1].data.name.replace(/[\s™:!']/g,''))}
                           onMouseOut={() => closeInfoCard(banners[currentBannerIndex][index + 1].data.name.replace(/[\s™:!']/g,''))}
                          >
                            <Image src={banners[currentBannerIndex][index + 1].data.header_image} alt="" width={306} height={143} objectFit='cover'/>
                            <div className="informations">
                              <div className="discount-block">
                                <div className="discount-percentage">-100%</div>
                                <div className="discount-prices">
                                  <div className="original-price">{banners[currentBannerIndex][index + 1].data.price_overview?.final_formatted}</div>
                                  <div className="final-price">$0.00</div>
                                </div>
                              </div>
                            </div>
                            { infoCard(banners[currentBannerIndex][index + 1]) }
                          </div>
                        </div>
                      )
                    }
                    break;
                  default:
                    break;
                }
              })
            }
          </div>
          <div className="carousel-thumbs-special-offers">
            {
              banners.map((_, index) =>
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