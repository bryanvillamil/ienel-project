import styled from 'styled-components'
import { breakpoint } from 'styled-components-breakpoint';

export const ContainerLinkWp = styled.a`
  position: fixed;
  bottom: 3%;
  right: 3%;
  z-index: 999;
  background: #00bb2d;
  width: 50px;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  transition: opacity 0.3s ease-in-out;
  svg {
    font-size: 32px;
  }
  ${breakpoint('md')`
    right: 2%;
    opacity: .7;
    padding: 12px;
    width: initial;
    height: initial;
    &:hover {
      opacity: 1;
    }
		svg {
      font-size: 30px;
    }
	`}
`