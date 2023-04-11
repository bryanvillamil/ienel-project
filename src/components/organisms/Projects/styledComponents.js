import styled from 'styled-components'
import { Element } from 'react-scroll';
import { breakpoint } from 'styled-components-breakpoint'
import 'animate.css';

export const ContentProjects = styled(Element)`
	position: relative;
  width: 100%;
	display: flex;
	flex-direction: column;
	background: ${props => props.theme.colors.colorPrimary};
	height: auto;
	padding: 50px 0;
	${breakpoint('md')`
    height: 65vh;
  `}
	${breakpoint('lg')`
    height: 72vh;
  `}
`
export const ContainSlider = styled.div`
	width: 100%;
	max-width: 1024px;
	/* ${breakpoint('lg')`
    width: 100%;
  `} */
`;

export const ContentProjectsText = styled.div`
	width: 70%;
	margin: auto;
	height: 100%;
	background: black;
	padding: 0 20px;
	opacity: 0;
	display: flex;
	justify-content: center;
	align-items: center;
`;