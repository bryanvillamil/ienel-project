import { DefaultLayout } from '@templates/index'
import {
  SectionSliderBg,
  Services,
  Projects,
  About,
  Location,
  Contact
} from '@components/index'

export default function Home() {
  // const options = useMemo(() => {
  //   return {
  //     root: null,
  //     rootMargin: '0px',
  //     threshold: 0.3
  //   }
  // }, [])

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
