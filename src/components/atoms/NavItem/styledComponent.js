import styled from 'styled-components'
import {Link as LinkHRef} from 'react-scroll'
import Link from 'next/link'
import { breakpoint } from 'styled-components-breakpoint';

export const LinkCustomHRef = styled(LinkHRef)`
  cursor: pointer;
	width: 100%;
	display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px; 
  position: relative;
  transition: all 0.5s;
  color: ${props => props.theme.colors.colorPrimary};
  text-decoration: none;
  text-transform: capitalize;
  &:hover {
    font-weight: bold;
  }

  ${breakpoint('md')`
		&:before { 
      content: '';
      position: absolute;
      width: 0%;
      height: 4px;
      bottom: -12px;
      left: 0;
      background-color: #333;
      transition: all 0.5s;
    }

    &.active:before,
    &:hover:before {
      width: 100%;
    }
	`}
`;

export const LinkTo = styled(Link)`
  cursor: pointer;
	width: 100%;
	display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px; 
  position: relative;
  transition: all 0.5s;
  color: #333;
  text-decoration: none;
  text-transform: capitalize;
  &:hover {
    font-weight: bold;
  }

  ${breakpoint('md')`
		&:before { 
      content: '';
      position: absolute;
      width: 0%;
      height: 4px;
      bottom: -12px;
      left: 0;
      background-color: #333;
      transition: all 0.5s;
    }

    &.active:before,
    &:hover:before {
      width: 100%;
    }
	`}
`;