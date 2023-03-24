import React from 'react'
import { LinkCustomHRef } from './styledComponent'

export const NavItem = ({
  href,
  to,
  text,
  active
}: {
  text: string
  active: boolean
  href?: string
  to: string
}) => {
  return (
    <LinkCustomHRef
      to={to}
      spy={true}
      smooth={true}
      duration={800}
      offset={-100}
      className={`${active ? 'active' : ''}`}>
      {text}
    </LinkCustomHRef>
  )
  // return to != null ? (
  //   <LinkCustomHRef
  //     to={to}
  //     spy={true}
  //     smooth={true}
  //     duration={500}
  //     offset={-100}
  //     className={`${active ? 'active' : ''}`}>
  //     {text}
  //   </LinkCustomHRef>
  // ) : (
  //   href != null && (
  //     <LinkTo href={href} className={`${active ? 'active' : ''}`}>
  //       {text}
  //     </LinkTo>
  //   )
  // )
}
