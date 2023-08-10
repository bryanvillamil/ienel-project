import styled from 'styled-components'
import { breakpoint } from 'styled-components-breakpoint'

export const FooterCustom = styled.footer`
  position: relative;
  top: -1px;
  display: flex;
  height: auto;
  width: 100%;
  background: ${(props) => props.theme.colors.colorPrimary};
  background: #111;
  padding: 25px 0;
  ${breakpoint('md')`
    padding: 0;
    height: 250px;
  `}
`

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  ${breakpoint('md')`
    flex-direction: row;
    justify-content: space-between;
  `}
`

export const FooterInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  order: 1;
  width: 90%;
  margin: 30px 0;
  h2 {
    font-size: 18px;
    margin: 0 0 10px 0;
    img {
      display: flex;
      object-fit: contain;
      width: 100%;
      max-width: 100px;
      height: 100%;
      padding: 3px;
      background: #fff;
      border-radius: 4px;
      filter: drop-shadow(5px 4px 4px #333);
    }
  }  
  ${breakpoint('md')`
    margin: 0px;
    padding: 0 0 0 25px;
    order: 1;
    width: 50%;
	`}
`

export const FooterInfoBox = styled.div`
  display: flex;
  align-items: center;
  font-weight: 400;
  width: 100%;
  height: 50px;
  svg {
    position: relative;
    right: 5px;
  }
  span, a {
    color: #fff;
    font-size: 14px;
  }
  a {
    transition: all 1s ease;
    display: flex;
    &:hover {
      transform: scale(1.1);
    }
  }
  p {
    margin-left: 10px;
    font-size: 13px;
  }

  ${breakpoint('sm')`
    height: 40px;
	`}
  ${breakpoint('md')`
    height: 30px;
	`}
`;



export const ContentLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  margin: 0;
  order: 1;
  img {
    display: flex;
    object-fit: contain;
    width: 100%;
    max-width: 100px;
    height: 100%;
    padding: 5px;
    background: #fff;
    border-radius: 4px;
    filter: drop-shadow(5px 4px 4px #333);
  }
  ${breakpoint('md')`
    order: 2;
		img {
			max-width: 100px;
		}
	`}
`
export const FooterPrivacy = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 20px 35px;
  order: 2;
  width: 90%;
  a {
    text-decoration: none;
    font-weight: 400;
    color: #fff;
    transition: all 0.5s ease-in-out;
    &:hover {
      color: ${(props) => props.theme.colors.colorSecondary};
    }
  }
  ${breakpoint('md')`
    order: 3;
    gap: 20px;
    width: 40%;
	`}
`

export const Networks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px 35px;
  order: 2;
  width: 15%;
  margin-top: 40px;
  a {
    text-decoration: none;
    color: #fff;
    transform: scale(1);
    transition: all 0.5s ease-in-out;
    &:hover {
      transform: scale(1.1);
    }
  }
  ${breakpoint('md')`
    padding: 0 25px 0 0;
    order: 3;
    gap: 20px;
	`}
`
