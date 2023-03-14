import styled from 'styled-components'
import { breakpoint } from 'styled-components-breakpoint';

export const Main = styled.main`
	min-height: 100vh;
	margin-top: -80px;
	${breakpoint('md')`
		margin-top: -100px;
	`}
	${breakpoint('xxl')`
		margin-top: -110px;
	`}
`;
