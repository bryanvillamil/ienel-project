import React from 'react'
import { Animate, Loading, ContainCenter, Title, Carousel } from '@components/index'
import { useGetAllProyectsQuery } from '@generated/graphql'
import { ContentProjects } from './styledComponents'
import 'animate.css'
import { CardProject,  } from '@components/molecules/CardProject'

export const Projects = () => {
  const { loading, data } = useGetAllProyectsQuery()

  const { home } = data ?? {}
  const { proyectosCollection } = home ?? {}
  console.log('ss', proyectosCollection?.items)

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
                <CardProject items={proyectosCollection?.items} />
          </Animate>
        </ContainCenter>
      ) : null}
    </ContentProjects>
  )
}
