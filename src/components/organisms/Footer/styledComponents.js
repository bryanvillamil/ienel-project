import styled from 'styled-components'
import { breakpoint } from 'styled-components-breakpoint'

export const FooterCustom = styled.footer`
  position: relative;
  display: flex;
  height: 250px;
  width: 100%;
  /* background: ${(props) => props.theme.colors.colorPrimary}; */
  background-color: black;
`

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  ${breakpoint('md')`
    flex-direction: row;
  `}
`

export const FooterInfo = styled.div`
  span {
    color: #616161;
  }
`
export const ContentLogo = styled.h1`
  display: flex;
  width: 100%;
  margin: 0;
  img {
    display: flex;
    object-fit: contain;
    width: 100%;
    max-width: 100px;
    height: 100%;
  }
  ${breakpoint('md')`
		img {
			max-width: 100px;
		}
	`}
`

export const Networks = styled.div`
  a {
    text-decoration: none;
    color: #616161;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`
