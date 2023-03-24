import { useState } from 'react'
import { Link } from 'react-scroll'
import Image from 'next/image'
import Logo from '@images/logo-ienel.png'
import { Navbar, ContainCenter } from '@components/index'

import {
  HeaderCustom,
  HeaderLogo,
  ContentLogo,
  HeaderMenu
} from './styledComponents'

export const Header = () => {
  const [navActive, setNavActive] = useState(false)

  return (
    <HeaderCustom>
      <ContainCenter>
        <HeaderLogo>
          <Link spy={true} smooth={true} duration={500} to="home">
            <ContentLogo>
              <Image
                priority
                style={{ width: 'auto', height: 'auto' }}
                src={Logo}
                alt="Logo Ienel"
              />
            </ContentLogo>
          </Link>
        </HeaderLogo>

        <HeaderMenu>
          <Navbar navActive={navActive} setNavActive={setNavActive} />
        </HeaderMenu>
      </ContainCenter>
    </HeaderCustom>
  )
}
