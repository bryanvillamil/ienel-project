import { useState } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { FaMapMarkerAlt } from 'react-icons/fa'
import MarcaAguaHeader from '@assets/img/marca-agua-header.jpg'
import { Navbar, ContainCenter } from '@components/index'
import { ILogoData } from '@typed/logo'

import {
  HeaderCustom,
  HeaderLogo,
  ContentLogo,
  HeaderMenu,
  ButtonVisited,
  WatermarkContainer
} from './styledComponents'

interface IPropsHeader {
  logo: ILogoData
  isHeaderMenu: boolean
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
    logo: { dataLogo },
    isHeaderMenu
  } = props

  return (
    <HeaderCustom>
      <WatermarkContainer src={MarcaAguaHeader} alt="" />
      <ContainCenter>
        <HeaderLogo>
          <Link href="/">
            <ContentLogo>
              <Logo dataLogo={dataLogo} />
            </ContentLogo>
          </Link>
        </HeaderLogo>

        <HeaderMenu>
          {isHeaderMenu && (
            <Navbar navActive={navActive} setNavActive={setNavActive} />
          )}
          <ButtonVisited
            as="a"
            href="https://www.google.com/maps/place/Tv.+41+%23+80B-46,+Laureles+-+Estadio,+Medell%C3%ADn,+Laureles,+Medell%C3%ADn,+Antioquia/@6.2486152,-75.6015296,19.32z/data=!4m14!1m7!3m6!1s0x8e44299e30b1169f:0x19926709698249a8!2sTv.+41+%2380b-52,+Laureles+-+Estadio,+Medell%C3%ADn,+Laureles,+Medell%C3%ADn,+Antioquia!3b1!8m2!3d6.2485236!4d-75.6011698!3m5!1s0x8e44299e3a81acdf:0xd602627864ff1681!8m2!3d6.2486097!4d-75.6011899!16s%2Fg%2F11j3mgflbw?hl=es&entry=ttu"
            target="_blank">
            Visítanos
            <FaMapMarkerAlt size={16} />
          </ButtonVisited>
        </HeaderMenu>
      </ContainCenter>
    </HeaderCustom>
  )
}
