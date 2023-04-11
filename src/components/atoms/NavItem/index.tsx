import React from 'react'
import { LinkCustomHRef } from './styledComponent'

export const NavItem = ({
  href,
  to,
  text,
  active,
  setNavActive
}: {
  text: string
  active: boolean
  href?: string
  to: string
  setNavActive: (value: boolean) => void
}) => {
  return (
    <LinkCustomHRef
      to={to}
      spy={true}
      smooth={true}
      duration={800}
      offset={-100}
      className={`${active ? 'active' : ''}`}
      onSetActive={() => setNavActive(false)}>
      {text}
    </LinkCustomHRef>
  )
}
