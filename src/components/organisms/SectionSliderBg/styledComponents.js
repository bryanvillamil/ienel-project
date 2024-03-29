import styled from 'styled-components'
import { Element, Link as LinkHRef } from 'react-scroll';
import { breakpoint } from 'styled-components-breakpoint'

export const SectionSlider = styled(Element)`
	position: relative;
  width: 100%;
	display: flex;
	overflow: hidden;
	height: 82vh;
	&:after {
		content: '';
    position: absolute;
    inset: 0;
		background: rgb(0,0,0);
		background: linear-gradient(0deg,rgba(0,0,0,1) 0%,rgba(0,0,0,.2) 40%,rgba(140,136,136,0) 50%);
		background: linear-gradient(0deg,rgba(0,0,0,1) 0%,rgba(0,0,0,.2) 50%,rgba(140,136,136,0) 60%);
	}
  ${breakpoint('md')`
    height: 91vh;
  `}
`;

export const ContentSlide = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  img {
    object-position: center;
    max-height: 100vh;
    max-width: 100vw;
    height: 100vh !important;
    /* object-fit: contain !important; */
  } 
`;

export const InfoCarousel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 9;
  top: 5%;
  left: 0;
  right: 0;
  margin: auto;
  width: 90%;
  height: 85%;
  z-index: 1;
  h2 {
    font-size: 50px;
    letter-spacing: 0.5px;
    margin: 0;
    text-shadow: 3px 3px 3px #111;
    text-align: center;
    /* color: ${props => props.theme.colors.colorPrimary}; */
    color: #1B1918;
    color: white;
  }
  p {
    font-size: 18px;
    font-weight: 500;
    text-align: center;
    text-shadow: 3px 3px 3px #111;
    line-height: 1.3;
  }
  ${breakpoint('sm')`
    width: 400px;
  `}
  ${breakpoint('md')`
    top: 25%;
    width: 600px;
    height: 300px;
    h2 {
      font-size: 60px;
      letter-spacing: 1px;
    }
    p {
      font-size: 16px;
      line-height: 1.5;
    }
  `}
  ${breakpoint('lg')`
    h2 {
      font-size: 70px;
    }
  `}
  ${breakpoint('xl')`
    h2 {
      font-size: 80px;
    }
  `}
`;


export const InfoCarouselButton = styled(LinkHRef)`
  display: flex;
  cursor: pointer;
  padding: 12px 15px;
  background: ${props => props.theme.colors.colorSecondary};
  transition: all 0.5s ease;
  border-radius: 5px;
  margin-top: 20px;
  text-align: center;
  box-shadow: 1px 4px 8px #333;
  width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    transform: scale(1.1);
  }
  ${breakpoint('md')`
    width: 110px;
    margin-top: 10px;
  `}
`;

export const ContentSvgs = styled.div`
  display: flex;
`;

export const SvgSmall = styled.svg`
  fill: ${props => props.theme.colors.white} !important;
  stroke: ${props => props.theme.colors.white};
  position: absolute;
  bottom: -2px;
  left: 0;
  background: none;
  z-index: 9;
  pointer-events: none;
  height: 60px;
  ${breakpoint('xs')`
    height: 100px;
  `}
  ${breakpoint('sm')`
    height: 120px;
  `}
  ${breakpoint('lg')`
    height: 170px;
    bottom: -4px;
  `}
`;

export const SvgBig = styled.svg`
  fill: ${props => props.theme.colors.white} !important;
  stroke: ${props => props.theme.colors.white};
  position: absolute;
  bottom: -2px;
  right: 0;
  background: none;
  z-index: 9;
  left: auto;
  pointer-events: none;
  height: 60px;
  ${breakpoint('xs')`
    height: 100px;
  `}
  ${breakpoint('sm')`
    height: 120px;
    bottom: -3px;
  `}
  ${breakpoint('lg')`
    height: 170px;
    bottom: -4px;
  `}
`;

