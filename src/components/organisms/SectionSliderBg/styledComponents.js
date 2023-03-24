import styled from 'styled-components'
import { Element } from 'react-scroll';
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
		background: linear-gradient(0deg,rgba(140,136,136,0) 100%,rgba(0,0,0,.2) 40%,rgba(0,0,0,1) 0%);
	}
`;

export const ContentSvgs = styled.div`
  display: flex;
`;

export const SvgSmall = styled.svg`
  fill: ${props => props.theme.colors.colorPrimary} !important;
  stroke: ${props => props.theme.colors.colorPrimary};
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
  fill: ${props => props.theme.colors.colorPrimary} !important;
  stroke: ${props => props.theme.colors.colorPrimary};
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

