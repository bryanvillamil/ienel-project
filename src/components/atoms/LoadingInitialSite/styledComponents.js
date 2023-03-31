import styled from 'styled-components'
import { breakpoint } from 'styled-components-breakpoint';

/*
  // const rotate = keyframes`
  //   100% {
  //     transform: rotate(360deg);
  //   }
  // `  animation: ${rotate} 1s linear infinite; 
*/

export const LoadingIcon = styled.div`
  display: inline-block;
  margin: 0 8px;
  font-size: 35px;
  color: #fff;
  ${breakpoint('md')`
		font-size: 35px;
	`}
`

export const ContentLoadingInitialSite = styled.div`
  background: ${props => props.theme.colors.colorBgLoading};
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BoxLoading = styled.div`
  height: 180px;
  width: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContentLogo = styled.div`
  height: auto;
  width: 110px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-radius: 4px;
  margin-bottom: 25px;
  filter: drop-shadow(5px 4px 4px #333);
`;