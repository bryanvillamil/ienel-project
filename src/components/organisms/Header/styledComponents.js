import styled from 'styled-components'
import Image from 'next/image'
import { CustomButton } from '@components/atoms/Button/styledComponents'
import { breakpoint } from 'styled-components-breakpoint';

export const HeaderCustom = styled.header`
	position: sticky;
	width: 100%;
	z-index: 30;
	top: 0;
	display: flex;
	box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
	transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
	height: 80px;
	${breakpoint('md')`
		height: 80px;
	`}
`;

export const WatermarkContainer = styled(Image)`
	z-index: -1;
  position: absolute;
	width: 100%;
	left: 0;
	top: 0;
`;


export const HeaderLogo = styled.div`
	cursor: pointer;
  display: flex;
	justify-content: center;
	align-items: center;
	width: 80px;
	height: 100%;
	max-width: 140px;
  padding: 0 25px 0 0;
	order: 2;
	transition: all 0.5s ease;
	a {
		text-decoration: none;
	}
	${breakpoint('md')`
		order: 1;
		padding: 0 0 0 25px;
		width: 15%;
		justify-content: flex-start;
		max-width: 180px;
	`}
`;

export const ContentLogo = styled.h1`
  display: flex;
	width: 100%;
	margin: 0;
	img {
		/* display: flex; */
		/* object-fit: contain; */
		width: 120px;
		max-width: 115px;
		height: 32px;
		/* aspect-ratio: 3/1; */
	}
`;

export const HeaderMenu = styled.div`
	display: flex;
	height: 100%;
	justify-content: flex-end;
	align-items: center;
	flex-grow: 1;
	transition: all 0.5s ease;
	${breakpoint('md')`
		order: 2;
	`}
`;

export const ButtonVisited = styled(CustomButton)`
	color: #fff;
	text-decoration: none;
	font-size: 14px;
	width: 85px;
	margin: 0 25px 0 0;
	display: none;
	&:hover {
		background: ${props => props.theme.colors.colorSecondary};
	}
	${breakpoint('md')`
		display: flex;
		font-size: 0;
		width: 40px;
		svg {
			width: 20px;
    	height: 20px;
		}
	`}
	${breakpoint('lg')`
		font-size: 14px;
		width: 85px;
		svg {
			left: 4px;
			position: relative;
			width: 16px;
    	height: 16px;
		}
	`}
`;
