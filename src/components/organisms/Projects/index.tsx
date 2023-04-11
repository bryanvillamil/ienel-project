import React from 'react'
import {
  Animate,
  Loading,
  ContainCenter,
  Title,
  Carousel,
  CardProject
} from '@components/index'
import { useGetAllProyectsQuery } from '@generated/graphql'
import { ContentProjects, ContainSlider } from './styledComponents'
import { IPropsProject } from '@/typed/projects'
import 'animate.css'

export const Projects = () => {
  const { loading, data } = useGetAllProyectsQuery()
  const { home } = data ?? {}
  const { proyectosCollection } = home ?? {}
  const items: any[] = proyectosCollection?.items ?? []
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
      {loading ? (
        <Loading />
      ) : data != null ? (
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
