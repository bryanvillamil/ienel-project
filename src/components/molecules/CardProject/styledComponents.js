import styled from 'styled-components'
import { breakpoint } from 'styled-components-breakpoint'
import 'animate.css'

export const BoxProyects = styled.div`
  width: 85%;
  max-width: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  cursor: pointer;
  padding: 50px 0;
  ${breakpoint('md')`
    max-width: 260px;
  `}
  ${breakpoint('lg')`
    width: 90%;
  `}
`
export const TitleCard = styled.div`
  width: 100%;
  height: auto;
  background: black;
  h3 {
    font-size: 18px;
    padding: 12px 15px;
    margin: 0;
  }
  ${breakpoint('md')`
    opacity: 0;
  `}
`

export const Card = styled.div`
  background: white;
  border-radius: ${(props) => props.theme.borderRadius.card};
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  z-index: 10;
  transition: all 0.5s ease-in-out;
  position: relative;
  height: 90%;
  overflow: hidden;
  &:hover {
    transform: translateY(-8%);
  }
  
  ${breakpoint('md')`
    &:hover ${TitleCard} {
      display: inline-block;
      animation: fadeInLeft; /* referring directly to the animation's @keyframe declaration */
      animation-duration: 0.5s; /* don't forget to set a duration! */
      opacity: 1;
    }
  `}
`
export const CardImage = styled.div`
  overflow: hidden;
  height: 60%;
  border-top-left-radius: ${(props) => props.theme.borderRadius.card};
  border-top-right-radius: ${(props) => props.theme.borderRadius.card};
  transform: skewY(-8deg);
  position: relative;
  top: -20px;
`

export const CardBody = styled.div`
  height: 40%;
  border-bottom-left-radius: ${(props) => props.theme.borderRadius.card};
  border-bottom-right-radius: ${(props) => props.theme.borderRadius.card};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  p {
    color: ${props => props.theme.colors.colorPrimary}
  }
`

export const ButtonCard = styled.div`
  width: fit-content;
  height: fit-content;
  margin: 0 auto;
  background-color: transparent;
  border-radius: ${(props) => props.theme.borderRadius.card};
`
