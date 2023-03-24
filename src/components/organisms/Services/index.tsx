import React from 'react'
import { Animate } from '@components/molecules/Animate'
import { ContentServices, Test } from './styledComponents'
import 'animate.css'

export const Services = () => {
  return (
    <ContentServices name="servicios" id="servicios">
      <Animate
        entranceAnimation="animate__backInLeft"
        exitAnimation="animate__backOutLeft">
        <Test>
          <h2>Services</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima aut
            animi rerum architecto veritatis voluptatem nobis necessitatibus
            maxime, accusantium similique, sint porro cumque quas modi officiis
            ullam nesciunt id quibusdam?
          </p>
        </Test>
      </Animate>
    </ContentServices>
  )
}
