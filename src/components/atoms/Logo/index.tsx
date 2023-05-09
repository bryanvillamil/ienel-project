import React from 'react'
import Image from 'next/image'
import { ILogoData } from '@typed/logo'

export const Logo = (props: ILogoData) => {
  const {
    dataLogo: { url, title, width, height }
  } = props
  return (
    <Image
      priority
      style={{ width: 'auto', height: 'auto' }}
      src={url}
      alt={title}
      width={width}
      height={height}
    />
  )
}
