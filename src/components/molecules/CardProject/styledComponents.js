import styled from 'styled-components'
import { breakpoint } from 'styled-components-breakpoint'
import 'animate.css'

export const BoxProyect = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-bottom: 60px;
  height: 320px;
  box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;
  ${breakpoint('sm')`
    box-shadow: none;
  `}
  ${breakpoint('md')`
    width: 100%;
    max-width: 450px;
    margin-bottom: 150px;
  `}
  ${breakpoint('lg')`
    width: 100%;
    height: 380px;
  `}
  ${breakpoint('xl')`
    height: 420px;
  `}
`

export const Card = styled.div`
  background: white;
  /* box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; */
  z-index: 10;
  transition: all 0.5s ease-in-out;
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
`

export const CardImage = styled.div`
  height: 100%;
  position: relative;
`

export const CardBody = styled.div`
  height: 80px;
  width: 100%;
  background: #fff;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h3 {
    color: #000;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: bold;
    padding: 12px 15px 0;
    margin: 0;
  }
  p {
    color: ${props => props.theme.colors.colorPrimary};
    font-size: 13px;
  }
  ${breakpoint('sm')`
    width: 300px;
  `}
`

export const ButtonCard = styled.div`
  width: fit-content;
  height: fit-content;
  margin: 0 auto;
  background-color: transparent;
  border-radius: ${(props) => props.theme.borderRadius.card};
`


  /* ${breakpoint('md')`
    &:hover {
      transform: translateY(-8%);
    }
    &:hover ${TitleCard} {
      display: inline-block;
      animation: fadeInLeft; /* referring directly to the animation's @keyframe declaration */
      // animation-duration: 0.5s; /* don't forget to set a duration! */
      opacity: 1;
  //   }
  // `} */