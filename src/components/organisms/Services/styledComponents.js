import styled from 'styled-components'
import { Element } from 'react-scroll';
import 'animate.css';

export const ContentServices = styled(Element)`
	position: relative;
  width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 60vh;
	background: #fff;
`;

export const ContentServicesText = styled.div`
	width: 70%;
	margin: auto;
	height: 100%;
	background: black;
	padding: 0 20px;
	opacity: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	z-index: 9;
`;

export const InfoServices = styled.div`
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

