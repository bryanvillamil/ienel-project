import styled from 'styled-components'
import { Element } from 'react-scroll';
import { breakpoint } from 'styled-components-breakpoint';
import BgAbout from '@assets/img/logo-clavija.png'
import 'animate.css';

export const ContentAbout = styled(Element)`
	position: relative;
  width: 100%;
	display: flex;
	flex-direction: column;
	height: auto;
`;

export const BgFixedAbout = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	inset: 0;
	z-index: -1;
	background-size: contain;
	background-repeat: repeat;
	background-size: 16%;
	background-attachment: fixed;
	opacity: 0.4;
	${breakpoint('md')`
    background-size: 10%;
  `};
	${breakpoint('xl')`
    background-size: 8%;
  `};
`;

export const ContainAbout = styled.div`
	width: 100%;
	max-width: 1300px;
  height: 100%;
  display: flex;
  justify-content: flex-start;
	align-items: center;
	flex-direction: column;
	h2 {
    margin: 60px 0 60px;
    
  }

  ${breakpoint('md')`
    width: 90%;
  `};

	${breakpoint('lg')`
      h2 {
				margin-bottom: 90px;
			}
  `};

  ${breakpoint('xl')`
    width: 100%;
  `};
`;

export const AboutBox = styled.div`
	position: relative;
  width: 90%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	margin-bottom: 50px;
	img {
		border-radius: 20px;
	}
	${breakpoint('lg')`
    margin-bottom: 100px;
  `};
`;

export const AboutRight = styled.div`
	position: relative;
  width: 100%;
	display: flex;
	margin-bottom: 40px;
	${breakpoint('lg')`
    width: 48%;
		margin-bottom: 0;
  `};
`;

export const AboutLeft = styled.div`
	position: relative;
  width: 100%;
	display: flex;
	flex-wrap: wrap;
	${breakpoint('lg')`
    width: 48%;
  `};
`;

export const AboutInfoBox = styled.div`
	position: relative;
  width: 100%;
	display: flex;
	flex-direction: column;
	h3 {
		font-weight: 800;
		font-size: 22px;
		text-transform: uppercase;
	}
	p {
		color: ${props => props.theme.colors.black};
		text-align: justify;
		font-weight: 500;
		line-height: 1.4;
	}
	ul {
		li {
			color: ${props => props.theme.colors.black};
			font-weight: 500;
			line-height: 1.4;
			margin-bottom: 10px;
			span {
				font-weight: 800;
			}
		}
	}
`;

