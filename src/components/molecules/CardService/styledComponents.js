import styled from 'styled-components'
import { breakpoint } from 'styled-components-breakpoint'

// export const CardContainer = styled.div`
//   perspective: 1000px;
//   transition: all 0.8s ease;
//   position: relative;
//   width: 100%;
//   height: 100%;
// `

// export const CardFront = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   position: absolute;
//   width: calc(100%);
//   height: calc(100%);
//   backface-visibility: hidden;
//   /* background-color: #f1f1f1; */
//   transform: ${(props) => (props.flipped ? 'rotateY(180deg)' : 'none')};
//   transition: transform 0.6s ease;
// `

// export const CardBack = styled.div`
//   /* background-color: ${(props) => props.theme.colors.colorPrimary}; */
//   transform: rotateY(180deg);
//   /* box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; */
//   border-radius: 10px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   position: absolute;
//   width: calc(100%);
//   height: calc(100%);
//   backface-visibility: hidden;
//   transform: ${(props) => (props.flipped ? 'none' : 'rotateY(180deg)')};
//   transition: transform 0.6s ease;
//   p {
//     max-width: 90%;
//   }
// `


// export const Card = styled.div`
//   width: 180px;
//   height: 180px;
//   perspective: 1000px;
//   position: relative;
//   &:before {
//     content '';
//     display: flex;
//     position: absolute;
//     bottom: 0;
//     left: 0;
//     right: 0;
//     width: 45%;
//     height: 2px;
//     background: #333;
//     margin: 0 auto;
//     transition: all 0.5s ease-in-out;
//   }
//   &:hover {
//     &:before {
//       width: 50%;
//     }
//   }
//   &:hover ${CardFront} {
//     transform: rotateY(180deg);
//   }
//   &:hover ${CardBack} {
//     transform: rotateY(0deg);
//   }
//   ${breakpoint('xxs')`
//     width: 150px;
//     height: 80px;
// 	`}
//   ${breakpoint('sm')`
//     height: 180px;
// 	`}
//   ${breakpoint('md')`
//     height: 100px;
// 	`}
//   ${breakpoint('lg')`
//     width: 170px;
//     height: 140px;
//     &:before {
//       width: 20%;
//     }
// 	`}
//   ${breakpoint('xl')`
//     width: 200px;
// 	`}
// `

export const BoxImage = styled.div`
  display: flex;
  width: 200px;
  height: 180px;
  position: relative;
  transition: transform 0.7s ease;
  ${breakpoint('lg')`
    width: 250px;
    height: 200px;
	`}
`;


export const Text = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  h3 {
    margin: 0 auto;
    font-weight: 500;
    color: black;
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    padding: 10px 0 12px;
    line-height: 1.5;
  }
  ${breakpoint('md')`
    h3 {
      line-height: 1.4;
    }
	`}
  ${breakpoint('lg')`
    h3 {
      max-width: 80%;
      font-size: 14px;
      height: 42px;
    }
	`}
  ${breakpoint('xxl')`
    h3 {
      font-size: 16px;
    }
	`}
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  transition: transform 0.6s ease;
  height: auto;
  margin-bottom: 40px;
  width: 90%;
  &:hover ${Text} {
    p {
      color: ${(props) => props.theme.colors.colorPrimary};
    }
  }
  &:hover ${BoxImage} {
    transform: scale(1.2);
  }

  ${breakpoint('xs')`
    width: 380px;
	`}
  ${breakpoint('sm')`
    width: 48%;
    height: auto;
	`}
  ${breakpoint('lg')`
    width: 33.333%;
	`}
`
