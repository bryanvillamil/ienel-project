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
    <>
    <LinkCustom to={text} spy={true} smooth={true} duration={500} offset={-100} className={`${active ? 'active' : ''}`} >
      {text}
    </LinkCustom>
    </>
  )
}
