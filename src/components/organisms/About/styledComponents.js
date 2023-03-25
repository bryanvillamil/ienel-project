import styled from 'styled-components'
import { Element } from 'react-scroll';
import 'animate.css';

export const ContentAbout = styled(Element)`
	position: relative;
  	width: 100%;
	display: flex;
	flex-direction: column;
	background: ${props => props.theme.colors.white};
	height: 80vh;
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

export const Test = styled.div`
	width: 50%;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	height: 100%;
	background: green;
`;
