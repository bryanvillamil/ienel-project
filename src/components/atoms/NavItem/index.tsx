import React from 'react'

import { LinkCustomHRef, LinkTo } from './styledComponent'

export const NavItem = ({
  href,
  to,
  text,
  active
}: {
  text: string
  active: boolean
  href?: string
  to?: string
}) => {

  return (
    to ? (
      <>
        <LinkCustomHRef to={to} spy={true} smooth={true} duration={500} offset={-100} className={`${active ? 'active' : ''}`} >
          {text}
        </LinkCustomHRef>
      </>
    )
    : href ? (
    <>
      <LinkTo href={href} className={`${active ? 'active' : ''}`} >
        {text}
      </LinkTo>
    </>
    ) : null
  )
}
