import Image from 'next/image'
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn
} from 'react-icons/fa'
import { ContainCenter } from '@components/index'
import { IPNetworks } from '@typed/networks'
import { ILogoData } from '@typed/logo'
import {
  FooterCustom,
  FooterContent,
  FooterInfo,
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
            <span>{year}</span> <h2>IENEL</h2>
          </FooterInfo>

          {/* Logo */}
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
