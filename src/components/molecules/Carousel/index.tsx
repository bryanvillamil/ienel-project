import React from 'react'
import Slider from 'react-slick'
import { ContentSlider } from './styledComponents'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export const Carousel = ({ children }: { children: React.ReactNode }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <ContentSlider>
      <Slider {...settings}>{children}</Slider>
    </ContentSlider>
  )
}
