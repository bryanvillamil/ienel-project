import styled from 'styled-components'
import { breakpoint } from 'styled-components-breakpoint'

export const SectionSlider = styled.section`
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
		/* background: linear-gradient(0deg,rgba(0,0,0,.8) 0%,rgba(0,0,0,.6) 16%,rgba(140,136,136,0.1) 100%);
		background: linear-gradient(0deg,rgba(0,0,0,1) 0%,rgba(0,0,0,.2) 40%,rgba(140,136,136,0) 100%); */
		background: linear-gradient(0deg,rgba(0,0,0,1) 0%,rgba(0,0,0,.2) 40%,rgba(140,136,136,0) 50%);
	}
`;

export const ContentSvgs = styled.div`
  display: flex;
`;

export const SvgSmall = styled.svg`
  fill: #fff !important;
  stroke: #fff;
  position: absolute;
  bottom: -2px;
  left: 0;
  background: none;
  z-index: 99;
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
  fill: #fff !important;
  stroke: #fff;
  position: absolute;
  bottom: -2px;
  right: 0;
  background: none;
  z-index: 99;
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

