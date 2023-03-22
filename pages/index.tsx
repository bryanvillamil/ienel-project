import { DefaultLayout } from '@templates/index'
import { SectionSliderBg, SectionAbout, SectionLocation } from '@components/index'

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

      <SectionAbout/>

      <SectionLocation />

    </DefaultLayout>
  )
}
