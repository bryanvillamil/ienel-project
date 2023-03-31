import styled from 'styled-components'
import { Element } from 'react-scroll';
import { breakpoint } from 'styled-components-breakpoint';
import 'animate.css';

export const ContentAbout = styled(Element)`
	position: relative;
  width: 100%;
	display: flex;
	flex-direction: column;
	height: 85vh;
	${breakpoint('md')`
    height: 80vh;
	`}
`;

export const BgFixedAbout = styled.div`
	width: 100%;
	height: 100%;
	background-size: cover;
	background-attachment: fixed;
	position: absolute;
	inset: 0;
	z-index: -1;
	&:after {
		content: '';
		width: 100%;
		height: 100%;
		position: absolute;
		inset: 0;
		background: ${props => props.theme.colors.colorPrimary};
		background: #111; /* rgb(36 82 26) */
		display: flex;
		opacity: 0.8;
	}
`;

export const ContentAboutText = styled.div`
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


export const InfoAbout = styled.div`
	width: 75%;
	height: 80%;
	max-width: 800px;
	max-height: 600px;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	margin: auto;
	background: #fff;
	color: #000;
`;
