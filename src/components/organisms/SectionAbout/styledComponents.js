import styled from 'styled-components'
import { Element } from 'react-scroll';
import 'animate.css';

export const ContentAbout = styled(Element)`
	position: relative;
  	width: 100%;
	display: flex;
	background: navy;
	height: 500px;
`

export const SectionRef = styled.section`
	width: 100%;
`

export const ContentAboutText = styled.div`
	width: 70%;
	margin: auto;
	height: 100%;
	background: black;
	padding: 20px;
	opacity: 0;
`;