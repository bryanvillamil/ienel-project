import React from 'react'
import Link from 'next/link'
import { Animate } from '@components/molecules/Animate'
import { ContentProjects, Test } from './styledComponents'
import 'animate.css'

export const Projects = () => {
  return (
    <ContentProjects name="proyectos" id="proyectos">
      <Animate
        entranceAnimation="animate__backInLeft"
        exitAnimation="animate__backOutLeft">
        <Test>
          <h2>Projects</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima aut
            animi rerum architecto veritatis voluptatem nobis necessitatibus
            maxime, accusantium similique, sint porro cumque quas modi officiis
            ullam nesciunt id quibusdam?
          </p>
          <Link href="/proyecto/1">ir detalle de projecto</Link>
        </Test>
      </Animate>
    </ContentProjects>
  )
}
