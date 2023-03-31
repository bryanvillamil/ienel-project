import React from 'react'
import { CustomButton } from './styledComponents'

interface IPropsButton {
  onClick: () => void
  text: string
  className: string
}

export const Button = ({ onClick, text, className }: IPropsButton) => {
  return (
    <CustomButton type="button" className={className} onClick={onClick}>
      {text}
    </CustomButton>
  )
}
