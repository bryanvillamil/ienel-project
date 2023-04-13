import React from 'react'
import {
  Animate,
  Loading,
  ContainCenter,
  Title,
  CardProject
} from '@components/index'
import Carousel from '@components/molecules/Carousel'
import { ContentProjects, ContainSlider } from './styledComponents'
import { IPropsProject } from '@/typed/projects'
import 'animate.css'

interface IPropsData {
  description?: string
  items?: string[]
}

export const Projects = ({ dataProjects }: { dataProjects: IPropsData }) => {
  console.log('dataProjects', dataProjects)

  const items: any[] = dataProjects?.items ?? []
  const dataItems: IPropsProject[] = items ?? []

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          arrows: true,
          slidesToShow: 2,
          dots: true,
          infinite: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          dots: true,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
  }

  return (
    <ContentProjects name="projects" id="projects">
      <Title type={2} text="Proyectos" color="white" align="center" />
      {dataProjects === null ? (
        <Loading />
      ) : dataProjects != null ? (
        <ContainCenter>
          <Animate
            entranceAnimation="animate__backInLeft"
            exitAnimation="animate__backOutLeft">
            <ContainSlider>
              <Carousel settings={settings}>
                {dataItems.map((item: IPropsProject, index) => {
                  return <CardProject key={index} item={item} />
                })}
              </Carousel>
            </ContainSlider>
          </Animate>
        </ContainCenter>
      ) : null}
    </ContentProjects>
  )
}
