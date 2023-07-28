import { useEffect, useState } from 'react'
import type { GetStaticProps } from 'next'
import { DefaultLayout } from '@templates/index'
import { getProjectsContent } from '@services/projects'
import { getBannersPpalContent } from '@services/bannersPpal'
import { getLogoContent } from '@services/logo'
import { getServicesContent } from '@services/services'
import { getNumberWpContent } from '@services/numWhatsapp'
import { getDataContact } from '@services/contact'
import { getFooterContent } from '@services/footer'
import { getMapContent } from '@services/map'

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

import {
  IFooterData,
  IContactContent,
  IPropsServices,
  ILogoData,
  IBannerData,
  IPropsProject
} from '@typed/index'

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
  googleMap: {
    apiKeyMap: string
    coordenadasGoogle: {
      lat: number
      lon: number
    }
  }
  contact: IContactContent
  footer: IFooterData
}

export default function Home(props: IPropsData) {
  const {
    projects,
    bannersPpal,
    logo,
    services,
    numberWp,
    googleMap,
    contact,
    footer
  } = props

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
    <DefaultLayout title="IENEL - Home" logo={logo} footer={footer}>
      <SectionSliderBg dataBanner={bannersPpal} />

      <Services dataServices={services} />

      {/* <About /> */}

      <Projects dataProjects={projects} />

      <Location googleMap={googleMap} />

      <Contact dataContact={contact} />

      <BtnWhatsapp number={numberWp.number} />
    </DefaultLayout>
  )
}

export const getStaticProps: GetStaticProps<any> = async () => {
  return {
    props: {
      projects: await getProjectsContent(),
      bannersPpal: await getBannersPpalContent(),
      logo: await getLogoContent(),
      services: await getServicesContent(),
      numberWp: await getNumberWpContent(),
      googleMap: await getMapContent(),
      contact: await getDataContact(),
      footer: await getFooterContent()
    }
  }
}
