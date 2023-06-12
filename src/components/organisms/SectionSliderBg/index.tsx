import React from 'react'
import Image from 'next/image'
import Carousel from '@components/molecules/Carousel'
import { IBannerData } from '@typed/banner'
import {
  SectionSlider,
  ContentSlide,
  InfoCarousel,
  InfoCarouselButton,
  ContentSvgs,
  SvgSmall,
  SvgBig
} from './styledComponents'

export const SectionSliderBg = ({
  dataBanner
}: {
  dataBanner: IBannerData
}) => {
  return (
    <SectionSlider name="home">
      <InfoCarousel>
        <h2>{dataBanner.titulo}</h2>
        <p>{dataBanner.description}</p>
        <InfoCarouselButton
          to="contact"
          spy={true}
          smooth={true}
          duration={800}
          offset={-100}>
          Contáctanos
        </InfoCarouselButton>
      </InfoCarousel>

      <Carousel>
        {dataBanner.banners.map((dat, index) => {
          return (
            <div key={index}>
              {dat.imgenesPrincipalesCollection.items.map((image, index) => {
                return (
                  <ContentSlide key={index}>
                    <Image
                      src={image.url}
                      alt={image.description || 'alt image'}
                      width={image.width}
                      height={image.height}
                      priority
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33.33vw"
                      style={{ objectFit: 'cover' }}
                    />
                  </ContentSlide>
                )
              })}
            </div>
          )
        })}
      </Carousel>

      <ContentSvgs>
        <SvgSmall width="21%" viewBox="0 0 100 102" preserveAspectRatio="none">
          <path d="M0 100 L100 100 L0 10 Z" />
        </SvgSmall>
      </ContentSvgs>
      <ContentSvgs>
        <SvgBig width="80%" viewBox="0 0 100 102" preserveAspectRatio="none">
          <path d="M0 100 L100 100 L100 10 Z" />
        </SvgBig>
      </ContentSvgs>
    </SectionSlider>
  )
}
