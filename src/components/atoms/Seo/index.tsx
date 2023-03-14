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
    </Head>
  )
}
