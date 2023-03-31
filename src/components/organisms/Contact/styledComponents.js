import styled from 'styled-components'
import { Element } from 'react-scroll';
import 'animate.css';

export const ContentContact = styled(Element)`
	position: relative;
  	width: 100%;
	display: flex;
	flex-direction: column;
	background: #fff;
	height: 80vh;
`
export const ContentContactText = styled.div`
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

export const BoxContact = styled.div`
	width: 70%;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	height: 100%;
	background: navy;
	color: #000;
	margin: auto;
`