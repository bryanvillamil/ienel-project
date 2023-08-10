import React from 'react'
import { LinkCustomHRef } from './styledComponent'

export const NavItem = ({
  href,
  to,
  text,
  active,
  className,
  setNavActive
}: {
  text: string
  active: boolean
  href?: string
  to: string
  className: string
  setNavActive: (value: boolean) => void
}) => {
  return (
    <LinkCustomHRef
      to={to}
      href={href}
      spy={true}
      smooth={true}
      duration={800}
      offset={-100}
      className={`${active ? 'active ' : ''} ${className}`}
      onSetActive={() => setNavActive(false)}>
      {text}
    </LinkCustomHRef>
  )
}
