import { useState } from 'react'
import { Link } from 'react-scroll'
import Image from 'next/image'
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

export const Header = (props: IPropsHeader) => {
  const [navActive, setNavActive] = useState(false)
  const {
    logo: {
      dataLogo: { url, title, width, height }
    }
  } = props

  return (
    <HeaderCustom>
      <ContainCenter>
        <HeaderLogo>
          <Link spy={true} smooth={true} duration={500} to="/">
            <ContentLogo>
              <Image
                priority
                style={{ width: 'auto', height: 'auto' }}
                src={url}
                alt={title}
                width={width}
                height={height}
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
