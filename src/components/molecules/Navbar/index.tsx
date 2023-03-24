import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { NavItem } from '@components/index'
import { Menu, NavMenuBar, NavMenuList } from './styledComponents'

export interface INavbar {
  navActive: boolean
  setNavActive: (value: boolean) => void
}

const MENU_LIST = [
  {
    text: 'servicios',
    href: '/servicios'
  },
  {
    text: 'proyectos',
    href: '/proyectos'
  },
  {
    text: 'about',
    to: 'about'
  },
  {
    text: 'ubicanos',
    to: 'ubicanos'
  },
  {
    text: 'contacto',
    href: '/contacto'
  }
]

export const Navbar: React.FC<INavbar> = ({ navActive, setNavActive }) => {
  const [activeIdx, setActiveIdx] = useState(-1)
  const router = useRouter()

  return (
    <Menu>
      <NavMenuBar onClick={() => setNavActive(!navActive)}>
        <div></div>
        <div></div>
        <div></div>
      </NavMenuBar>

      <NavMenuList className={navActive ? 'active' : ''}>
        {MENU_LIST.map((menu, idx) => {
          const pathUrl = router.pathname.slice(1) // remove '/' the url

          return (
            <div key={idx} onClick={() => setActiveIdx(idx)}>
              <NavItem
                active={activeIdx === idx || pathUrl === menu.text}
                {...menu}
              />
            </div>
          )
        })}
      </NavMenuList>
    </Menu>
  )
}
