import styled from 'styled-components'
import { breakpoint } from 'styled-components-breakpoint';

export const Description = styled.p`
  font-size: 16px;
  ${breakpoint('md')`
    font-size: 14px;
	`}
  ${breakpoint('lg')`
    font-size: 15px;
	`}
  ${breakpoint('xl')`
    font-size: 16px;
	`}
`