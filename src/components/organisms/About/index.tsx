import React from 'react'
import { Animate } from '@components/index'
import BG from '@images/bg/solar-2.jpg'
import { ContentAbout, BgFixedAbout, InfoAbout } from './styledComponents'
import 'animate.css'

export const About = () => {
  return (
    <ContentAbout name="about" id="about">
      <BgFixedAbout style={{ backgroundImage: `url(${BG.src})` }} />
      <Animate
        entranceAnimation="animate__backInLeft"
        exitAnimation="animate__backOutLeft">
        <InfoAbout>
          <h2>InfoAboutando div de prueba para animacion 33</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima aut
            animi rerum architecto veritatis voluptatem nobis necessitatibus
            maxime, accusantium similique, sint porro cumque quas modi officiis
            ullam nesciunt id quibusdam?
          </p>
        </InfoAbout>
      </Animate>
    </ContentAbout>
  )
}
