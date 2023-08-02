import { Seo, Header, Footer } from '@components/index'
import { ILogoData, IFooterData } from '@typed/index'
import { Main } from './styledComponent'

interface DefaultLayoutProps {
  children?: JSX.Element[] | JSX.Element | React.ReactNode
  title: string
  logo: ILogoData
  footer: IFooterData
  isHeaderMenu: boolean
}

export default function DefaultLayout({
  children,
  title,
  logo,
  footer,
  isHeaderMenu
}: DefaultLayoutProps) {
  return (
    <>
      <Seo title={title} />
      <Header logo={logo} isHeaderMenu={isHeaderMenu} />
      <Main>{children}</Main>
      <Footer logo={logo} footer={footer} />
    </>
  )
}

// color section : #0C1F07
