import React from 'react'

interface IPropsParagraph {
  text: string
  size: number
  color: string
  margin?: number
  align:
    | 'start'
    | 'end'
    | 'left'
    | 'right'
    | 'center'
    | 'justify'
    | 'match-parent'
  opacity?: number
  paddingX?: number
  paddingY?: number
}

export const Paragraph = ({
  text,
  size,
  color,
  align,
  opacity,
  margin,
  paddingX,
  paddingY
}: IPropsParagraph) => {
  return (
    <p
      style={{
        color: `${color}`,
        textAlign: `${align}`,
        fontSize: `${size}`,
        opacity,
        marginTop: margin,
        marginBottom: margin,
        paddingTop: paddingY,
        paddingBottom: paddingY,
        paddingLeft: paddingX,
        paddingRight: paddingX
      }}>
      {text}
    </p>
  )
}
