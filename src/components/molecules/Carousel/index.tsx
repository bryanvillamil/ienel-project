import React from 'react'
import Slider from 'react-slick'
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md'
import { ContentSlider, CustomArrow } from './styledComponents'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const CustomPrevArrow = (props: any) => {
  const { className, onClick } = props
  return (
    <CustomArrow className={className} onClick={onClick}>
      <MdArrowBackIosNew />
    </CustomArrow>
  )
}

const CustomNextArrow = (props: any) => {
  const { className, onClick } = props
  return (
    <CustomArrow className={className} onClick={onClick}>
      <MdArrowForwardIos />
    </CustomArrow>
  )
}

const defaultSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: <CustomPrevArrow />,
  nextArrow: <CustomNextArrow />
}

export const Carousel = ({
  children,
  settings
}: {
  children: React.ReactNode
  settings: object
}) => {
  const mergedSettings = { ...defaultSettings, ...settings }

  return (
    <ContentSlider>
      <Slider {...mergedSettings}>{children}</Slider>
    </ContentSlider>
  )
}
