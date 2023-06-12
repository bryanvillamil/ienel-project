import Image from 'next/image'
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn
} from 'react-icons/fa'
import { MdLocationOn } from 'react-icons/md'
import { BsFillPhoneFill } from 'react-icons/bs'

import { ContainCenter } from '@components/index'
import { IPNetworks } from '@typed/networks'
import { ILogoData } from '@typed/logo'
import {
  FooterCustom,
  FooterContent,
  FooterInfo,
  FooterInfoBox,
  Networks,
  ContentLogo
} from './styledComponents'

interface IPropsHeader {
  logo: ILogoData
}

export const Footer = (props: IPropsHeader) => {
  const {
    logo: {
      dataLogo: { url, title, width, height }
    }
  } = props

  const networks: IPNetworks[] = [
    {
      id: 1,
      name: 'facebook',
      icon: FaFacebookF,
      link: 'https://www.facebook.com/'
    },
    {
      id: 2,
      name: 'twitter',
      icon: FaTwitter,
      link: 'https://twitter.com/'
    },
    {
      id: 3,
      name: 'instagram',
      icon: FaInstagram,
      link: 'https://www.instagram.com/'
    },
    {
      id: 4,
      name: 'linkedin',
      icon: FaLinkedinIn,
      link: 'https://www.linkedin.com/'
    }
  ]

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
              <span>3207357928 - 3206295069</span>
            </FooterInfoBox>
            <FooterInfoBox>
              <MdLocationOn size={18} />
              <span>
                Tv. 41 #80b - 52, Laureles - Laureles, Medellín, Antioquia
              </span>
            </FooterInfoBox>
            <FooterInfoBox>
              <span>© {year}</span> <p> All rights reserved.</p>
            </FooterInfoBox>
          </FooterInfo>

          {/* Logo */}
          <ContentLogo>
            {/* <Image
              priority
              style={{ width: 'auto', height: 'auto' }}
              src={url}
              alt={title}
              width={width}
              height={height}
            /> */}
          </ContentLogo>

          <Networks>
            {networks.map((network: any) => (
              <a
                key={network.id}
                href={network.link}
                target="_blank"
                rel="noreferrer">
                <network.icon size={25} />
              </a>
            ))}
          </Networks>
        </FooterContent>
      </ContainCenter>
    </FooterCustom>
  )
}
