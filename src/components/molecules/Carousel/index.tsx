import React from 'react'
import Slider from 'react-slick'
import { ContentSlider } from './styledComponents'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export const Carousel = ({
  children,
  settings
}: {
  children: React.ReactNode
  settings: object
}) => {
  return (
    <ContentSlider>
      <Slider {...settings}>{children}</Slider>
    </ContentSlider>
  )
}
