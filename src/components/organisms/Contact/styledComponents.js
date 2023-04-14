import styled from 'styled-components'
import { Element } from 'react-scroll'
import { breakpoint } from 'styled-components-breakpoint'
import 'animate.css'

export const ContentContact = styled(Element)`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #fff;
  min-height: 85vh;
  height: 100%;
  padding: 0 0 40px;
  ${breakpoint('lg')`
    padding: 40px 0;
    padding: 0;
	`}
`;

export const BoxContact = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: auto;
  ${breakpoint('lg')`
    height: 95vh;
    flex-direction: row;
	`}
  ${breakpoint('xxl')`
		width: 100%;
    height: 85vh;
	`}
`


export const BoxLeft = styled.div`
  width: 100%;
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  ${breakpoint('md')`
    height: 45vh;
	`}
  ${breakpoint('lg')`
		width: 45%;
    height: 100%;
	`}
  ${breakpoint('xxl')`
		width: 50%;
	`}
`;

export const BoxRight = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 20px;
  margin-top: 30px;
  ${breakpoint('md')`
    margin-top: 0;
	`}
  ${breakpoint('lg')`
		width: 55%;
	`}
  ${breakpoint('xxl')`
		width: 50%;
	`}
`;

export const Description = styled.p`
  line-height: 1.3;
  margin: 20px auto 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #000;
  ${breakpoint('sm')`
		text-align: initial;
    margin-bottom: 35px;
	`}
  ${breakpoint('lg')`
		width: 90%;
    line-height: 1.5;
    font-size: 14px;
    margin-bottom: 0;
	`}
  ${breakpoint('xxl')`
		max-width: 700px;
	`}
`

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  padding: 20px 0;
  ${breakpoint('lg')`
		// max-width: 580px;
    width: 90%;
    padding: 10px 0;
	`}
  ${breakpoint('xxl')`
		max-width: 700px;
	`}
`

export const Label = styled.label`
  line-height: 1.3;
  display: flex;
  align-items: center;
  text-align: center;
  color: #000;
  justify-content: flex-start;
  font-weight: bold;
  margin: 10px 0;
  font-size: 14px;
  ${breakpoint('sm')`
		text-align: initial;
    margin-bottom: 35px;
	`}
  ${breakpoint('md')`
		margin: 20px 0 10px;
    font-size: 14px;
	`}
  ${breakpoint('lg')`
    line-height: 1.3;
	`}
`

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 10px;
  &:first-child {
    margin-top: 0;
  }
  input,
  textarea {
    min-height: 38px;
    border-radius: 8px;
    border: 2px solid #7b7b7b;
    transition: all 0.5s ease-in-out;
    font-size: 15px;
    padding: 6px 10px;
    box-shadow: 1px 2px 6px #a19595;
    font-family: '__Montserrat_b906fa', '__Montserrat_Fallback_b906fa';
    &.field-error {
      border: 1px solid #d92e2eeb;
    }
    &:focus {
      outline: none;
      border: 2px solid ${(props) => props.theme.colors.colorPrimary};
    }
  }
  ${breakpoint('md')`
    margin-top: 20px;
    &.email,
    &.phone {
      width: 48%;
    }
	`}
  ${breakpoint('lg')`
    margin-top: 10px;
    input {
      min-height: 34px;
    }
	`}
`

export const BtnSubmit = styled(Row)`
  max-width: 150px;
  justify-content: center;
  align-items: center;
  margin: 30px auto 0;
  input {
    display: flex;
    cursor: pointer;
    padding: 12px 15px;
    height: 43px;
    background: ${(props) => props.theme.colors.colorPrimary};
    color: #fff;
    font-weight: bold;
    transition: all 0.5s ease;
    border-radius: 5px;
    margin-top: 20px;
    text-align: center;
    box-shadow: 1px 4px 8px #111;
    width: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    &:hover {
      transform: scale(1.1);
    }
    ${breakpoint('md')`
      width: 100px;
      padding: 10px 15px;
      margin-top: 10px;
      height: auto;
    `}
  }
`

export const Error = styled.span`
  display: flex;
  color: #d92e2eeb;
  width: 100%;
  font-size: 12px;
  font-weight: 600;
  margin-top: 10px;
`
