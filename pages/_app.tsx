import '~styles/globals.scss'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { Montserrat } from '@next/font/google'

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin']
})

const theme = {
  colors: {
    /* verde 1: #82AC41; */
    /* verde 2: #0AC477; */
    /* verde 3: #0C1F07; */
    /* verde 4: #84A12F; */
    /* verde 5: #66BA42; */
    /* verde 6: #4A5F19; */
    /* verde 7: #0E73FC; */
    colorPrimary: '#84A12F',
    colorSecondary: '#FFFDF9',
    white: '#fff',
    dark: '#333'
  },
  // fonts: ["sans-serif", "Roboto"],
  // font-family: ${props => props.theme.fonts[0]};
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
