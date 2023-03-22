import React, { useRef, useEffect } from 'react'
import { ContentAbout, ContentAboutText, SectionRef } from './styledComponents'
import {useElementOnViewport}  from '@hooks/useElementOnViewport'
import 'animate.css'

export const SectionAbout = ()=> {

  const targetRef = useRef(null)
  const isVisible = useElementOnViewport(targetRef)

  const classList = () => {
    if (isVisible) {
      return 'animate__animated animate__backInLeft'
    }else {
      return 'animate__animated animate__backOutLeft'
    }
  } 

  return (
  <ContentAbout name='about' id="about">
    <h1>{!isVisible ? 'Is not in viewport' : 'Is in viewport' }</h1>
    <SectionRef ref={targetRef}>
      <ContentAboutText className={classList()}>Hola</ContentAboutText>
    </SectionRef>
  </ContentAbout> 
  )
}
