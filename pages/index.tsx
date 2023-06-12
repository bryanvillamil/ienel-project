import { useEffect, useState } from 'react'
import type { GetStaticProps } from 'next'
import { DefaultLayout } from '@templates/index'
import { getProjectsContent } from '@services/projects'
import { getBannersPpalContent } from '@services/bannersPpal'
import { getLogoContent } from '@services/logo'
import { getServicesContent } from '@services/services'
import { getNumberWpContent } from '@services/numWhatsapp'
import { IPropsProject } from '@typed/projects'
import { ILogoData } from '@typed/logo'
import { IBannerData } from '@typed/banner'
import { IPropsServices } from '@typed/services'
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
  services: IPropsServices
  bannersPpal: IBannerData
  logo: ILogoData
  numberWp: {
    number: string
  }
}

export default function Home(props: IPropsData) {
  const { projects, bannersPpal, logo, services, numberWp } = props

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
      <SectionSliderBg dataBanner={bannersPpal} />

      <Services dataServices={services} />

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
    // projects: await getProjectsContent()
    props: {
      projects: await getProjectsContent(),
      bannersPpal: await getBannersPpalContent(),
      logo: await getLogoContent(),
      services: await getServicesContent(),
      numberWp: await getNumberWpContent()
    }
  }
}
