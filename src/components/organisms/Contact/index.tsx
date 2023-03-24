import React from 'react'
import { Animate } from '@components/index'
import { ContentContact, Test } from './styledComponents'
import 'animate.css'

export const Contact = () => {
  return (
    <ContentContact name="contacto" id="contacto">
      <Animate
        entranceAnimation="animate__backInLeft"
        exitAnimation="animate__backOutLeft">
        <Test>
          <h2>Contacto</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima aut
            animi rerum architecto veritatis voluptatem nobis necessitatibus
            maxime, accusantium similique, sint porro cumque quas modi officiis
            ullam nesciunt id quibusdam?
          </p>
        </Test>
      </Animate>
    </ContentContact>
  )
}
