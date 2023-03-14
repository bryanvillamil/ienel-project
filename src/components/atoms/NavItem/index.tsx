import React from 'react'

import { LinkCustom } from './styledComponent'

export const NavItem = ({
  href,
  text,
  active
}: {
  href: string
  text: string
  active: boolean
}) => {
  return (
    <LinkCustom href={href} className={`${active ? 'active' : ''}`}>
      {text}
    </LinkCustom>
  )
}
