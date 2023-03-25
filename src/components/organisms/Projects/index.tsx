import React from 'react'
import Link from 'next/link'
import { Animate, Loading } from '@components/index'
import { useGetAllProyectsQuery } from '@generated/graphql'
import { ContentProjects, Test } from './styledComponents'
import 'animate.css'

export const Projects = () => {
  const { loading, data } = useGetAllProyectsQuery()

  const { seccionProyectos } = data ?? {}
  const { titulo } = seccionProyectos ?? {}

  return (
    <ContentProjects name="projects" id="projects">
      {loading ? (
        <Loading />
      ) : seccionProyectos != null ? (
        <Animate
          entranceAnimation="animate__backInLeft"
          exitAnimation="animate__backOutLeft">
          <Test>
            <h2>{titulo}</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
              aut animi rerum architecto veritatis voluptatem nobis
              necessitatibus maxime, accusantium similique, sint porro cumque
              quas modi officiis ullam nesciunt id quibusdam?
            </p>
            <Link href="/proyecto/1">ir detalle de projecto</Link>
          </Test>
        </Animate>
      ) : null}
    </ContentProjects>
  )
}
