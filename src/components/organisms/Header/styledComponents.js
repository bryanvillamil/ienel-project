import styled from 'styled-components'
import { breakpoint } from 'styled-components-breakpoint';

export const HeaderCustom = styled.header`
	position: sticky;
	width: 100%;
  z-index: 30;
  top: 0;
	display: flex;
	/* background: #f1f1f1; */
	box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
	height: 80px;
	transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
	${breakpoint('md')`
		height: 100px;
	`}
	${breakpoint('xxl')`
		height: 110px;
	`}
`;


export const HeaderLogo = styled.div`
  display: flex;
	justify-content: center;
	align-items: center;
	width: 80px;
	height: 100%;
	max-width: 180px;
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
	`}
`;

export const ContentLogo = styled.h1`
  display: flex;
	width: 100%;
	margin: 0;
	img {
		display: flex;
		object-fit: contain;
		width: 100%;
		max-width: 150px;
	}
	${breakpoint('md')`
		img {
			max-width: 120px;
		}
	`}
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
