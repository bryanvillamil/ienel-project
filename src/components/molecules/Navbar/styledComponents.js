import styled from 'styled-components'
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
  background-color: #fff;
  z-index: 999;
  box-shadow: 8px 0px 8px -8px rgba(0, 0, 0, 0.5);
	transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
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
    div {
      border: none;
      &:first-child {
        border: none;
      }
    }
	`}
`;



