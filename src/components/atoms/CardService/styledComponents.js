import styled from 'styled-components'
import { breakpoint } from 'styled-components-breakpoint'

export const CardContainer = styled.div`
  max-width: 320px;
  height: 240px;
  perspective: 1000px;
  transition: all 0.8s ease;
  position: relative;
  width: 100%;
  height: 100%;
  /* padding: 20px; */
`

export const CardFront = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f1f1f1;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 10px;
  position: absolute;
  width: calc(100%);
  height: calc(100%);
  backface-visibility: hidden;
  background-color: #f1f1f1;
  transform: ${(props) => (props.flipped ? 'rotateY(180deg)' : 'none')};
  transition: transform 0.6s ease;
  color: ${(props) => props.theme.colors.colorPrimary};
`

export const CardBack = styled.div`
  background-color: ${(props) => props.theme.colors.colorPrimary};
  transform: rotateY(180deg);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: calc(100%);
  height: calc(100%);
  backface-visibility: hidden;
  transform: ${(props) => (props.flipped ? 'none' : 'rotateY(180deg)')};
  transition: transform 0.6s ease;
  p {
    max-width: 85%;
  }
`
export const Card = styled.div`
  width: 200px;
  height: 200px;
  perspective: 1000px;
  &:hover ${CardFront} {
    transform: rotateY(180deg);
  }
  &:hover ${CardBack} {
    transform: rotateY(0deg);
  }
  ${breakpoint('md')`
    width: 244px;
	`}
  ${breakpoint('lg')`
    width: 170px;
	`}
    ${breakpoint('xl')`
    width: 200px;
	`}
`

export const Text = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  p {
    max-width: 85%;
    font-weight: 700;
    color: black;
  }
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: transform 0.6s ease;
  &:hover ${Text} {
    p {
      color: ${(props) => props.theme.colors.colorPrimary};
    }
  }
`
