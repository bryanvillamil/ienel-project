import '~styles/globals.scss'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { Montserrat } from '@next/font/google'

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin']
})

const theme = {
  breakpoints: {
    xs: 320,
    sm: 568,
    md: 768,
    lg: 1024,
    xl: 1200,
    xxl: 1500
  }
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-montserrat: ${montserrat.style.fontFamily};
        }
      `}</style>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
