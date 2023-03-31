import React from 'react'
import { Animate } from '@components/index'
import { ContentServices, InfoServices } from './styledComponents'
import 'animate.css'

export const Services = () => {
  return (
    <ContentServices name="services" id="services">
      <Animate
        entranceAnimation="animate__backInRight"
        exitAnimation="animate__backOutRight">
        <InfoServices>
          <h2>Services</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima aut
            animi rerum architecto veritatis voluptatem nobis necessitatibus
            maxime, accusantium similique, sint porro cumque quas modi officiis
            ullam nesciunt id quibusdam?
          </p>
        </InfoServices>
      </Animate>
    </ContentServices>
  )
}
