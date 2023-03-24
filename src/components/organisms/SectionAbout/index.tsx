import React from 'react'
import {
  ContentAbout,
  Test
} from './styledComponents'
import 'animate.css'
import { Animate } from '@components/molecules/Animate'

export const SectionAbout = () => {

  return (
    <ContentAbout name="about" id="about">
        <Animate entranceAnimation="animate__backInLeft" exitAnimation="animate__backOutLeft">
            <Test>
                  <h2>Testando div de prueba para animacion</h2>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
                    aut animi rerum architecto veritatis voluptatem nobis
                    necessitatibus maxime, accusantium similique, sint porro cumque
                    quas modi officiis ullam nesciunt id quibusdam?
                  </p>
            </Test>
        </Animate>
    </ContentAbout>
  )
}
