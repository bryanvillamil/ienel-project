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
import { ContentProjects } from './styledComponents'
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
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <ContentProjects name="projects" id="projects">
      <Title type={4} text="Proyectos" color="white" align="center"></Title>
      {loading ? (
        <Loading />
      ) : data != null ? (
        <ContainCenter>
          <Animate
            entranceAnimation="animate__backInLeft"
            exitAnimation="animate__backOutLeft">
            <Carousel settings={settings}>
              {dataItems.map((item: IPropsProject, index) => {
                return <CardProject key={index} item={item} />
              })}
            </Carousel>
          </Animate>
        </ContainCenter>
      ) : null}
    </ContentProjects>
  )
}
