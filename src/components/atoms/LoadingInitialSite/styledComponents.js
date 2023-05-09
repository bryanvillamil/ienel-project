import styled, { keyframes } from 'styled-components';

const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;


export const ContentLoadingInitialSite = styled.div`
  background: #fff;
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`


export const Loading = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 4px solid #000;
  border-top: 4px solid #fff;
  animation: ${spinAnimation} 1s linear infinite;
`;

