import { DefaultLayout } from '@templates/index'
import { SectionSliderBg, SectionAbout } from '@components/index'

export default function Home() {
  return (
    <DefaultLayout title="IENEL - Home">
      <SectionSliderBg />

      <SectionAbout />
    </DefaultLayout>
  )
}
