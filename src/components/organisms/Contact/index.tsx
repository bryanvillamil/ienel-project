import React from 'react'
import { Animate, ContainCenter } from '@components/index'
import { ContentContact, BoxContact } from './styledComponents'
import 'animate.css'

export const Contact = () => {
  return (
    <ContentContact name="contact" id="contact">
      <Animate
        entranceAnimation="animate__zoomIn"
        exitAnimation="animate__zoomOut">
        <ContainCenter>
          <BoxContact>
            <h2>Contacto</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
              aut animi rerum architecto veritatis voluptatem nobis
              necessitatibus maxime, accusantium similique, sint porro cumque
              quas modi officiis ullam nesciunt id quibusdam?
            </p>
          </BoxContact>
        </ContainCenter>
      </Animate>
    </ContentContact>
  )
}
