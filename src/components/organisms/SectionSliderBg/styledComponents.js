import styled from 'styled-components'
import { Element, Link as LinkHRef } from 'react-scroll';
import { breakpoint } from 'styled-components-breakpoint'

export const SectionSlider = styled(Element)`
	position: relative;
  width: 100%;
	display: flex;
	overflow: hidden;
	height: 91vh;
	&:after {
		content: '';
    position: absolute;
    inset: 0;
		background: rgb(0,0,0);
		background: linear-gradient(0deg,rgba(0,0,0,1) 0%,rgba(0,0,0,.2) 40%,rgba(140,136,136,0) 50%);
		background: linear-gradient(0deg,rgba(0,0,0,1) 0%,rgba(0,0,0,.2) 50%,rgba(140,136,136,0) 60%);
	}
`;

export const ContentSlide = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
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
    font-size: 35px;
    letter-spacing: 0.5px;
    margin: 0;
    text-shadow: 3px 3px 3px #000;
    text-align: center;
    color: ${props => props.theme.colors.colorPrimary};
  }
  p {
    font-size: 18px;
    font-weight: 500;
    text-align: center;
    text-shadow: 3px 3px 3px #333;
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
      font-size: 45px;
      letter-spacing: 1px;
    }
    p {
      font-size: 16px;
      line-height: 1.5;
    }
  `}
`;


export const InfoCarouselButton = styled(LinkHRef)`
  display: flex;
  cursor: pointer;
  padding: 12px 15px;
  background: ${props => props.theme.colors.colorPrimary};
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
    width: 100px;
    padding: 10px 15px;
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

