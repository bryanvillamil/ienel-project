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
  min-height: 80vh;
  height: 100%;
  padding: 40px 0;
`

export const BoxContact = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: auto;
  ${breakpoint('lg')`
		width: 100%;
	`}
`

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
		max-width: 650px;
    line-height: 1.5;
	`}
`

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 20px 0;
  ${breakpoint('lg')`
		max-width: 650px;
	`}
`

export const Label = styled(Description)`
  justify-content: flex-start;
  font-weight: bold;
  margin: 10px 0;
  ${breakpoint('md')`
		margin: 20px 0 10px;
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
    border: 2px solid #aaa;
    transition: all 0.5s ease-in-out;
    font-size: 15px;
    padding: 6px 10px;
    box-shadow: 2px 5px 12px #333;
    font-family: '__Montserrat_b906fa', '__Montserrat_Fallback_b906fa';
    &.field-error {
      border: 1px solid #d92e2eeb;
    }
    &:focus {
      outline: none;
      border: 2px solid ${(props) => props.theme.colors.colorPrimary};
    }
  }
  ${breakpoint('sm')`
    label {
      font-size: 10px;
    }
	`}
  ${breakpoint('md')`
    margin-top: 20px;
	`}
  ${breakpoint('lg')`
    label {
      font-size: 16px;
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
