import { Seo, Header, Footer } from '@components/index'
import { ILogoData } from '@typed/logo'
import { Main } from './styledComponent'

interface DefaultLayoutProps {
  children?: JSX.Element[] | JSX.Element | React.ReactNode
  title: string
  logo: ILogoData
}

export default function DefaultLayout({
  children,
  title,
  logo
}: DefaultLayoutProps) {
  return (
    <>
      <Seo title={title} />
      <Header logo={logo} />
      <Main>{children}</Main>
      <Footer logo={logo} />
    </>
  )
}

// color section : #0C1F07
