import React from 'react'
import { H1, H2, H3, H4, H5, H6 } from './styledComponents'

interface IPropsTitle {
  type: number | string
  text: string
  color: string
  align:
    | 'start'
    | 'end'
    | 'left'
    | 'right'
    | 'center'
    | 'justify'
    | 'match-parent'
}

export const Title = ({ type, text, color, align }: IPropsTitle) => {
  const TITLES: any = {
    1: (
      <H1
        style={{
          color: `${color}`,
          textAlign: `${align}`
        }}>
        {text}
      </H1>
    ),
    2: (
      <H2
        style={{
          color: `${color}`,
          textAlign: `${align}`
        }}>
        {text}
      </H2>
    ),
    3: (
      <H3
        style={{
          color: `${color}`,
          textAlign: `${align}`
        }}>
        {text}
      </H3>
    ),
    4: (
      <H4
        style={{
          color: `${color}`,
          textAlign: `${align}`
        }}>
        {text}
      </H4>
    ),
    5: (
      <H5
        style={{
          color: `${color}`,
          textAlign: `${align}`
        }}>
        {text}
      </H5>
    ),
    6: (
      <H6
        style={{
          color: `${color}`,
          textAlign: `${align}`
        }}>
        {text}
      </H6>
    )
  }

  return TITLES[type]
}
