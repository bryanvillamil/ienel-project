import React from 'react'
import Map from '../../molecules/Map'
import { ContentLocation } from './styledComponents'

export const Location = () => {
  return (
    <ContentLocation name="location" id="location">
      <Map apiKey={process.env.API_KEY_GOOGLE_MAPS ?? ''} />
    </ContentLocation>
  )
}

// import React from 'react'
// import dynamic from 'next/dynamic'
// import { ContentLocation } from './styledComponents'

// const DynamicMap = dynamic(
//   async () => await import('@components/molecules/Map'),
//   {
//     loading: () => <p>Loading...</p>
//   }
// )

// export const Location = () => {
//   return (
//     <ContentLocation name="location" id="location">
//       <DynamicMap apiKey={process.env.NEXT_PUBLIC_API_KEY_GOOGLE_MAPS ?? ''} />
//     </ContentLocation>
//   )
// }
