import { useState } from 'react'
import { Link } from 'react-scroll'
import dynamic from 'next/dynamic'
import { Navbar, ContainCenter } from '@components/index'
import { ILogoData } from '@typed/logo'

import {
  HeaderCustom,
  HeaderLogo,
  ContentLogo,
  HeaderMenu
} from './styledComponents'

interface IPropsHeader {
  logo: ILogoData
}

const Logo = dynamic(
  async () => await import('../../atoms/Logo').then((mod) => mod.Logo),
  {
    ssr: false
  }
)

export const Header = (props: IPropsHeader) => {
  const [navActive, setNavActive] = useState(false)
  const {
    logo: { dataLogo }
  } = props

  return (
    <HeaderCustom>
      <ContainCenter>
        <HeaderLogo>
          <Link spy={true} smooth={true} duration={500} to="/">
            <ContentLogo>
              <Logo dataLogo={dataLogo} />
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
