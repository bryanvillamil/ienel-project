import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ApolloProvider } from '@apollo/client'
import client from '@graphql/client'
import { theme } from '@styles/theme'
import { ThemeProvider } from 'styled-components'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '~styles/globals.scss'
import { Montserrat } from '@next/font/google'

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  display: 'swap'
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-montserrat: ${montserrat.style.fontFamily};
        }
      `}</style>

      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </ApolloProvider>
    </>
  )
}
