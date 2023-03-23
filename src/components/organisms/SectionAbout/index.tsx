import React, { useRef } from 'react'
import {
  ContentAbout,
  ContentAboutText,
  SectionRef,
  Test
} from './styledComponents'
import { useElementOnViewport } from '@hooks/useElementOnViewport'
import 'animate.css'

export const SectionAbout = () => {
  const targetRef = useRef(null)
  const isVisible = useElementOnViewport(targetRef)

  const classList = () => {
    if (isVisible) {
      return 'animate__animated animate__backInLeft'
    } else {
      return 'animate__animated animate__backOutLeft'
    }
  }

  return (
    <ContentAbout name="about" id="about">
      <h1>{!isVisible ? 'Is not in viewport' : 'Is in viewport'}</h1>
      <SectionRef ref={targetRef}>
        <ContentAboutText className={classList()}>
          <Test>
            <h2>Testando div de prueba para animacion</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
              aut animi rerum architecto veritatis voluptatem nobis
              necessitatibus maxime, accusantium similique, sint porro cumque
              quas modi officiis ullam nesciunt id quibusdam?
            </p>
          </Test>
        </ContentAboutText>
      </SectionRef>
    </ContentAbout>
  )
}
