import styled from 'styled-components'
import {Link as LinkHRef} from 'react-scroll'
import Link from 'next/link'
import { breakpoint } from 'styled-components-breakpoint';

export const LinkCustomHRef = styled(LinkHRef)`
  cursor: pointer;
	width: 100%;
	display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px; 
  position: relative;
  transition: all 0.5s;
  color: ${props => props.theme.colors.colorPrimary};
  text-decoration: none;
  text-transform: capitalize;
  padding: 20px 0;
  white-space: nowrap;
  &:hover,
  &.active {
    font-weight: bold;
    color: #fff;
  }

  &.active:before,
  &:hover:before {
    width: 100%;
  }

  &:before { 
    content: '';
    position: absolute;
    width: 0%;
    height: 100%;
    bottom: 0px;
    left: 0;
    transition: all 0.5s;
    z-index: -1;
  }

  &.odd {
    &:before {
      background-color: ${props => props.theme.colors.colorSecondary};
    }
  }
  &.even {
    &:before {
      background-color: ${props => props.theme.colors.black};
    }
  }

  ${breakpoint('md')`
    font-size: 15px; 
    justify-content: space-between;
    padding: 0;
    &:hover,
    &.active {
      color: ${props => props.theme.colors.colorPrimary};
    }
		&:before { 
      height: 4px;
      bottom: -12px;
      left: 0;
      background-color: #333;
      transition: all 0.5s;
    }
	`}

  ${breakpoint('lg')`
    font-size: 18px; 
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