import React from 'react'
import { H1, H2, H3, H4, H5, H6 } from './styledComponents'

interface IPropsTitle {
  type: number
  text: string
  color: string
  align: string
}

export const Title = ({ type, text, color }: IPropsTitle) => {
  switch (type) {
    case 2:
      return (
        <H2
          style={{
            color: `${color}`
          }}>
          {text}
        </H2>
      )
    case 3:
      return (
        <H3
          style={{
            color: `${color}`
          }}>
          {text}
        </H3>
      )
    case 4:
      return (
        <H4
          style={{
            color: `${color}`
          }}>
          {text}
        </H4>
      )
    case 5:
      return (
        <H5
          style={{
            color: `${color}`
          }}>
          {text}
        </H5>
      )
    case 6:
      return (
        <H6
          style={{
            color: `${color}`
          }}>
          {text}
        </H6>
      )
    default:
      return (
        <H1
          style={{
            color: `${color}`
          }}>
          {text}
        </H1>
      )
  }
}
