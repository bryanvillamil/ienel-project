import { useEffect, useState } from 'react'
import type { GetStaticProps } from 'next'
import { DefaultLayout } from '@templates/index'
import { getProjectsContent } from '@services/projects'
import { getBannersPpalContent } from '@services/bannersPpal'
import { getLogoContent } from '@services/logo'
import { getNumberWpContent } from '@services/numWhatsapp'
import { IPropsProject } from '@typed/projects'
import { ILogoData } from '@typed/logo'
import {
  BtnWhatsapp,
  LoadingInitialSite,
  SectionSliderBg,
  Services,
  Projects,
  // About,
  Location,
  Contact
} from '@components/index'

interface IPropsData {
  projects: {
    items: [IPropsProject]
  }
  bannersPpal: object
  logo: ILogoData
  numberWp: {
    number: string
  }
}

export default function Home(props: IPropsData) {
  const { projects, bannersPpal, logo, numberWp } = props

  console.log('bannersPpal', bannersPpal)

  const [isLoadingHome, setIsLoadingHome] = useState(true)

  useEffect(() => {
    window.scrollTo(0, 0)
    const timeoutId = setTimeout(() => {
      setIsLoadingHome(false)
    }, 1500)

    return () => clearTimeout(timeoutId)
  }, [])

  if (isLoadingHome) {
    return <LoadingInitialSite />
  }

  return (
    <DefaultLayout title="IENEL - Home" logo={logo}>
      <SectionSliderBg />

      <Services />

      {/* <About /> */}

      <Projects dataProjects={projects} />

      <Location />

      <Contact />

      <BtnWhatsapp number={numberWp.number} />
    </DefaultLayout>
  )
}

export const getStaticProps: GetStaticProps<any> = async () => {
  return {
    // propjects: await getProjectsContent()
    props: {
      projects: await getProjectsContent(),
      bannersPpal: await getBannersPpalContent(),
      logo: await getLogoContent(),
      numberWp: await getNumberWpContent()
    }
  }
}
