import { Seo, Header, Footer } from '@components/index'
import { Main } from './styledComponent'

interface DefaultLayoutProps {
  children?: JSX.Element[] | JSX.Element | React.ReactNode
  title: string
}

export default function DefaultLayout({ children, title }: DefaultLayoutProps) {
  return (
    <>
      <Seo title={title} />
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  )
}

// color section : #0C1F07
