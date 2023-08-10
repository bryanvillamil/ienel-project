import Image from 'next/image'
import { FaFacebookF, FaTwitter } from 'react-icons/fa'
import { MdLocationOn } from 'react-icons/md'
import { BsFillPhoneFill } from 'react-icons/bs'
import { IoDocumentText, IoDocument } from 'react-icons/io5'

import { ContainCenter } from '@components/index'
import { ILogoData, IFooterData } from '@typed/index'
import {
  FooterCustom,
  FooterContent,
  FooterInfo,
  FooterInfoBox,
  Networks,
  FooterPrivacy
} from './styledComponents'

interface IPropsHeader {
  logo: ILogoData
  footer: IFooterData
}

export const Footer = (props: IPropsHeader) => {
  const {
    logo: {
      dataLogo: { url, title, width, height }
    },
    footer
  } = props

  const { numberContacts, socialNetworks } = footer

  const ICONOS: any = {
    facebook: FaFacebookF,
    twitter: FaTwitter
  }

  const today = new Date()
  const year = today.getFullYear()

  return (
    <FooterCustom>
      <ContainCenter>
        <FooterContent>
          <FooterInfo>
            <h2>
              <Image
                priority
                style={{ width: 'auto', height: 'auto' }}
                src={url}
                alt={title}
                width={width}
                height={height}
              />
            </h2>
            <FooterInfoBox>
              <BsFillPhoneFill size={16} />
              <span>{numberContacts}</span>
            </FooterInfoBox>
            <FooterInfoBox>
              <a
                href="https://www.google.com/maps/place/Tv.+41+%23+80B-46,+Laureles+-+Estadio,+Medell%C3%ADn,+Laureles,+Medell%C3%ADn,+Antioquia/@6.2486152,-75.6015296,19.32z/data=!4m14!1m7!3m6!1s0x8e44299e30b1169f:0x19926709698249a8!2sTv.+41+%2380b-52,+Laureles+-+Estadio,+Medell%C3%ADn,+Laureles,+Medell%C3%ADn,+Antioquia!3b1!8m2!3d6.2485236!4d-75.6011698!3m5!1s0x8e44299e3a81acdf:0xd602627864ff1681!8m2!3d6.2486097!4d-75.6011899!16s%2Fg%2F11j3mgflbw?hl=es&entry=ttu"
                target="blank">
                <MdLocationOn size={18} />
                Tv. 41 #80b - 52, Laureles - Laureles, Medellín, Antioquia
              </a>
            </FooterInfoBox>
            <FooterInfoBox>
              <span>© {year}</span> <p> All rights reserved.</p>
            </FooterInfoBox>
          </FooterInfo>

          <FooterPrivacy>
            <a
              href="/pdfs/politica-de-tratamiento-de-datos.pdf"
              target="_blank"
              rel="noopener noreferrer">
              <IoDocumentText size={16} /> Politica de tratamiento de datos
            </a>
            <a
              href="/pdfs/politica-del-sistema-integrado-de-gestion.pdf"
              target="_blank"
              rel="noopener noreferrer">
              <IoDocument size={16} /> Politica del Sistema Integrado de Gestion
            </a>
          </FooterPrivacy>

          <Networks>
            {socialNetworks.map((network: any, idx) => {
              const Ico = ICONOS[network.nombreIcono]
              return (
                <a
                  key={idx}
                  href={network.enlacePrincipal}
                  target="_blank"
                  rel="noreferrer">
                  <Ico size={25} />
                </a>
              )
            })}
          </Networks>
        </FooterContent>
      </ContainCenter>
    </FooterCustom>
  )
}
