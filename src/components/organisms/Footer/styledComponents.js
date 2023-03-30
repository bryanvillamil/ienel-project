import styled from 'styled-components'
// import { breakpoint } from 'styled-components-breakpoint';

export const FooterCustom = styled.footer`
	position: relative;
  display: flex;
  height: 250px;
	width: 100%;
  background: ${props => props.theme.colors.colorPrimary};
`;