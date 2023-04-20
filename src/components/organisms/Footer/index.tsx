import Image from 'next/image'
import { ContainCenter } from '@components/index'
import {
  FooterCustom,
  FooterContent,
  FooterInfo,
  Networks,
  ContentLogo
} from './styledComponents'
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn
} from 'react-icons/fa'
import { IPNetworks } from '@typed/networks'

export const Footer = () => {
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

  return (
    <FooterCustom>
      <ContainCenter>
        <FooterContent>
          <FooterInfo>
            <span>2023 </span>
            IENEL
          </FooterInfo>
          <div>Hola 2</div>

          {/* Logo */}
          <ContentLogo>
            <Image
              priority
              style={{ width: 'auto', height: 'auto' }}
              src=""
              alt=""
              width={100}
              height={100}
            />
          </ContentLogo>

          <Networks>
            {networks.map((network: any) => (
              <a
                key={network.id}
                href={network.link}
                target="_blank"
                rel="noreferrer">
                <network.icon size={30} />
              </a>
            ))}
          </Networks>
        </FooterContent>
      </ContainCenter>
    </FooterCustom>
  )
}
