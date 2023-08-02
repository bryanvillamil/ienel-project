import styled from 'styled-components'
import { breakpoint } from 'styled-components-breakpoint';

export const ContainerPqrs = styled.div`
	width: 100%;
	height: 100%;
  max-width: 1500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const ContentBackHome = styled.div`
  margin-top: 40px;
  padding: 10px 15px;
  display: flex;
  a {
    color: #333;
    display: flex;
    transition: all 0.5s ease;
    text-decoration: none;
    svg {
      margin-right: 10px;
      transition: all 0.5s ease;
      position: relative;
      right: 0;
    }

    &:hover {
      svg {
        right: 5px;
      }
    }
  }
  ${breakpoint('md')`
     padding: 10px 25px;
	`}
`;

export const ContentFormPqrs = styled.section`
  text-align: center;
  h2 {
    color: red;
  }
`;

