import styled from 'styled-components'
import { Element } from 'react-scroll';
import { breakpoint } from 'styled-components-breakpoint'
import 'animate.css';

export const ContentProjects = styled(Element)`
	position: relative;
  width: 100%;
	display: flex;
	flex-direction: column;
	height: auto;
	padding: 50px 0 80px;
	${breakpoint('md')`
		padding: 100px 0 50px;
  `}
`
export const ContainProjects = styled.div`
	width: 100%;
	max-width: 1300px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${breakpoint('md')`
		flex-direction: row;
    width: 90%;
  `}
  ${breakpoint('xl')`
    width: 100%;
  `}
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

export const ColumnProjects = styled.div`
	width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  ${breakpoint('md')`
		width: 46%;
    &:last-child {
      margin-top: 10px;
    }
  `}
  ${breakpoint('lg')`
		width: 42%;
  `}
`;

export const BoxProjectsInfo = styled.div`
	width: 90%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  margin-bottom: 40px;
  h2 {
    text-align: center !important;
    margin-bottom: 20px;
  }
  p {
    line-height: 1.3;
  }
  ${breakpoint('md')`
		width: 100%;
    height: 220px;
    h2 {
      text-align: left !important;
    }
  `}
  ${breakpoint('lg')`
    margin-bottom: 0;
    height: 280px;
  `}
`;

export const CardProject = styled.div`
	width: 100%;
  height: 450px;
  background: green;
`;