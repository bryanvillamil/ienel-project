import { useEffect, useState } from 'react'
import { DefaultLayout } from '@templates/index'
import {
  LoadingInitialSite,
  SectionSliderBg,
  Services,
  Projects,
  About,
  Location,
  Contact
} from '@components/index'

export default function Home() {
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
    <DefaultLayout title="IENEL - Home">
      <SectionSliderBg />

      <About />

      <Services />

      <Projects />

      <Location />

      <Contact />
    </DefaultLayout>
  )
}
