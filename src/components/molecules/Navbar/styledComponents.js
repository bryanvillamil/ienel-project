import styled from 'styled-components'
import { breakpoint } from 'styled-components-breakpoint';


export const Menu = styled.nav`
	width: 100%;
	display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px;
  /* background-color: #f1f1f1; */
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
  row-gap: 24px;
  left: -330px;
  padding: 24px 16px;
  transition: all 0.2s;
  min-height: calc(100vh - 60px);
  background-color: #fff;
  z-index: 999;
  box-shadow: 8px 0px 8px -8px rgba(0, 0, 0, 0.5);
	transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  &.active {
    left: 0;
  }

  ${breakpoint('md')`
		position: unset;
    flex-direction: row;
    min-height: fit-content;
    width: fit-content;
    column-gap: 24px;
    align-items: center;
    box-shadow: none;
	`}
`;



