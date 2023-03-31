import React from 'react'
import Link from 'next/link'
import { Animate, Loading, ContainCenter } from '@components/index'
import { useGetAllProyectsQuery } from '@generated/graphql'
import { ContentProjects, BoxProyects } from './styledComponents'
import 'animate.css'

export const Projects = () => {
  const { loading, data } = useGetAllProyectsQuery()

  const { home } = data ?? {}
  const { proyectosCollection } = home ?? {}
  console.log('ss', proyectosCollection?.items)

  // const settings = {
  //   dots: true,
  //   infinite: false,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 3,
  //   initialSlide: 0,
  //   responsive: [
  //     {
  //       breakpoint: 991,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //         infinite: true,
  //         dots: true
  //       }
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         initialSlide: 2
  //       }
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     }
  //   ]
  // }

  return (
    <ContentProjects name="projects" id="projects">
      {loading ? (
        <Loading />
      ) : data != null ? (
        <ContainCenter>
          <h2>Proyectos</h2>
          <Animate
            entranceAnimation="animate__backInLeft"
            exitAnimation="animate__backOutLeft">
            <BoxProyects>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
                aut animi rerum architecto veritatis voluptatem nobis
                necessitatibus maxime, accusantium similique, sint porro cumque
                quas modi officiis ullam nesciunt id quibusdam?
              </p>
              <Link href="/proyecto/1">ir detalle de projecto</Link>
            </BoxProyects>
          </Animate>
        </ContainCenter>
      ) : null}
    </ContentProjects>
  )
}
