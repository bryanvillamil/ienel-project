import styled from 'styled-components'
import 'animate.css'

export const BoxProyects = styled.div`
  width: 50%;
  justify-content: center;
  align-items: center;
  display: flex !important;
  align-items: center;
  justify-content: center;
  margin: auto;
  cursor: pointer;
`
export const TitleCard = styled.div`
  width: 100%;
  height: auto !important;
  opacity: 0;
  background: black;
`

export const Card = styled.div`
  background: white;
  border-radius: ${(props) => props.theme.borderRadius.card};
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  z-index: 10;
  transition: all 0.5s ease-in-out;
  position: relative;
  height: 90% !important;
  overflow: hidden;
  &:hover {
    transform: translateY(-3%);
  }
  &:hover ${TitleCard} {
    display: inline-block;
    animation: fadeInLeft; /* referring directly to the animation's @keyframe declaration */
    animation-duration: 0.5s; /* don't forget to set a duration! */
    opacity: 1;
  }
`
export const CardImage = styled.div`
  overflow: hidden;
  height: 60% !important;
  border-top-left-radius: ${(props) => props.theme.borderRadius.card};
  border-top-right-radius: ${(props) => props.theme.borderRadius.card};
  transform: skewY(-8deg);
  position: relative;
  top: -20px;
`

export const CardBody = styled.div`
  height: 40% !important;
  border-bottom-left-radius: ${(props) => props.theme.borderRadius.card};
  border-bottom-right-radius: ${(props) => props.theme.borderRadius.card};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const ButtonCard = styled.div`
  width: fit-content;
  height: fit-content !important;
  margin: 0 auto;
  background-color: transparent;
  border-radius: ${(props) => props.theme.borderRadius.card};
`
