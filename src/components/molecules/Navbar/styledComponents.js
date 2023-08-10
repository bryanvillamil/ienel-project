import styled from 'styled-components'
import Link from 'next/link'
import { breakpoint } from 'styled-components-breakpoint';

export const Menu = styled.nav`
	width: 100%;
	display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px;
  ${breakpoint('md')`
		justify-content: flex-end;
    padding: 0 18px;
	`}
`;

export const NavMenuBar = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 6px;
  cursor: pointer;
  z-index: 99;
  div {
    width: 40px;
    height: 4px;
    background-color: black;
    border-radius: 2px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 6px;
    &:first-child {
      transform: ${({ className }) => className === 'active' ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:last-child {
      transform: ${({ className }) => className === 'active' ? 'rotate(-45deg)' : 'rotate(0)'}
    }
    &:nth-child(2) {
      opacity: ${({ className }) => className === 'active' ? '0' : '1'};
      transform: ${({ className }) => className === 'active' ? 'translateX(20px)' : 'translateX(0)'};
    }
  }

  ${breakpoint('md')`
		display: none;
	`}
`;

export const NavMenuList = styled.div`
	display: flex;
  flex-direction: column;
  position: fixed;
  top: 80px;
  width: 220px;
  left: -330px;
  padding: 0;
  transition: all 0.2s;
  min-height: calc(100vh - 60px);
  z-index: 999;
  box-shadow: 8px 0px 8px -8px rgba(0, 0, 0, 0.5);
	transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  background: #fff;
  &.active {
    left: 0;
  }
  div {
    border-bottom: 1px solid #333;
    &:first-child {
      border-top: 1px solid #333;
    }
  }

  ${breakpoint('md')`
    row-gap: 24px;
    padding: 24px 16px;
		position: unset;
    flex-direction: row;
    min-height: fit-content;
    width: fit-content;
    column-gap: 24px;
    align-items: center;
    box-shadow: none;
    background: none;
    
    div {
      border: none;
      &:first-child {
        border: none;
      }
    }
	`}
`;

export const LinkPQRs = styled(Link)`
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
    background-color: ${props => props.theme.colors.colorSecondary};
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
      transition: all 0.5s;
    }
	`}

  ${breakpoint('lg')`
    font-size: 18px; 
	`}
`;



