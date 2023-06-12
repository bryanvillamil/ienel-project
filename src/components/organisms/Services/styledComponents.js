import styled from 'styled-components'
import { Element } from 'react-scroll'
import { breakpoint } from 'styled-components-breakpoint'
import 'animate.css'

export const ContentServices = styled(Element)`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: #fff;
  margin: 60px 0px;
  ${breakpoint('lg')`
    margin: 120px 0px;
	`}
`

export const ContentServicesText = styled.div`
  width: 70%;
  margin: auto;
  height: 100%;
  background: black;
  padding: 0 20px;
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 9;
`

export const InfoServices = styled.div`
  /* width: 75%; */
  width: 100%;
  height: 80%;
  max-width: 1300px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: auto;
  background: #fff;
  color: #000;

  h2 {
    margin-bottom: 20px;
    ${breakpoint('lg')`
    margin-bottom: 32px
	`};
  }
`

export const ServicesCards = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around; 
  align-items: start;
  flex-wrap: wrap;
  
  ${breakpoint('sm')`
    justify-content: space-evenly;
	`}
  ${breakpoint('lg')`
    justify-content: space-between;
    // gap: 20px;
	`}
`
