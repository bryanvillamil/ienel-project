import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { NavItem } from '@components/index'
import { Menu, NavMenuBar, NavMenuList } from './styledComponents'

export interface INavbar {
  navActive: boolean
  setNavActive: (value: boolean) => void
}

const MENU_LIST = [
  {
    text: 'servicios',
    to: 'services'
  },
  // {
  //   text: 'sobre nosotros',
  //   to: 'about'
  // },
  {
    text: 'proyectos',
    to: 'projects'
  },
  // {
  //   text: 'cómo llegar',
  //   to: 'location'
  // },
  {
    text: 'contacto',
    to: 'contact'
  }
]

export const Navbar: React.FC<INavbar> = ({ navActive, setNavActive }) => {
  const [activeIdx, setActiveIdx] = useState(-1)
  const router = useRouter()

  return (
    <Menu>
      <NavMenuBar
        onClick={() => setNavActive(!navActive)}
        className={navActive ? 'active' : ''}>
        <div />
        <div />
        <div />
      </NavMenuBar>

      <NavMenuList className={navActive ? 'active' : ''}>
        {MENU_LIST.map((menu, idx) => {
          const pathUrl = router.pathname.slice(1) // remove '/' the url

          return (
            <div key={idx} onClick={() => setActiveIdx(idx)}>
              <NavItem
                active={activeIdx === idx || pathUrl === menu.text}
                setNavActive={setNavActive}
                {...menu}
              />
            </div>
          )
        })}

        <Link href="/pqrs" className="pqrs">
          PQRs
        </Link>
      </NavMenuList>
    </Menu>
  )
}
