import Head from 'next/head'

interface IPropsSeo {
  title?: string
}

export const Seo = ({ title }: IPropsSeo) => {
  const defaultTitle = 'IENEL SAS'
  const pageTitle = title ?? ''
  return (
    <Head>
      <title>
        {pageTitle !== '' ? `${pageTitle} | ${defaultTitle}` : defaultTitle}
      </title>
      <meta
        name="description"
        content="Somos una compañia de electricidad, en IENEL queremos brindarte el mejor servicio"
      />
      <meta property="og:title" content="IENEL SAS" key="title" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
  )
}
