import React from 'react'
import Image from 'next/image'
import Solar1 from '@images/bg/solar-1.jpg'
import Solar2 from '@images/bg/solar-2.jpg'
import Solar3 from '@images/bg/solar-3.jpg'
import Solar4 from '@images/bg/solar-4.jpg'
import Solar5 from '@images/bg/solar-5.jpg'
import Solar6 from '@images/bg/solar-6.jpg'
import { Carousel } from '@components/index'
import {
  SectionSlider,
  ContentSlide,
  InfoCarousel,
  InfoCarouselButton,
  ContentSvgs,
  SvgSmall,
  SvgBig
} from './styledComponents'

const BG_LIST = [
  {
    id: 1,
    url: Solar1,
    name: 'Panel Solar 1'
  },
  {
    id: 2,
    url: Solar2,
    name: 'Panel Solar 2'
  },
  {
    id: 3,
    url: Solar3,
    name: 'Panel Solar 3'
  },
  {
    id: 4,
    url: Solar4,
    name: 'Panel Solar 4'
  },
  {
    id: 5,
    url: Solar5,
    name: 'Panel Solar 5'
  },
  {
    id: 6,
    url: Solar6,
    name: 'Panel Solar 6'
  }
]

export const SectionSliderBg = () => {
  return (
    <SectionSlider name="home">
      <InfoCarousel>
        <h2>Proveemos el mejor servicio electrico para ti</h2>
        <p>
          ¡Si quieres conocer mas de nuestros servicios te invitanos a que te
          contactes con nosotros, estaremos preparados para brindarte el mejor
          servicio!
        </p>
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
        {BG_LIST.map((img) => {
          return (
            <ContentSlide key={img.id}>
              <Image
                src={img.url}
                alt={img.name}
                style={{ objectFit: 'cover' }}
              />
            </ContentSlide>
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
