import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head>
          <style>{`
            @font-face {
              font-display: swap;
            }
          `}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
