import styled from 'styled-components'
import { Element } from 'react-scroll';
import { breakpoint } from 'styled-components-breakpoint';

export const ContentLocation = styled(Element)`
	position: relative;
  width: 100%;
	display: flex;
	height: 65vh;
	${breakpoint('xxl')`
		height: 65vh;
	`}
`;
