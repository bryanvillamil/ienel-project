import React from 'react'
import Map from '../../molecules/Map'
import { ContentLocation } from './styledComponents'

interface IGoogleMapProps {
  apiKeyMap: string
  coordenadasGoogle: {
    lat: number
    lon: number
  }
}

export const Location = ({ googleMap }: { googleMap: IGoogleMapProps }) => {
  const { apiKeyMap, coordenadasGoogle } = googleMap

  return (
    <ContentLocation name="location" id="location">
      <Map
        apiKey={apiKeyMap ?? process.env.API_KEY_GOOGLE_MAPS}
        coord={coordenadasGoogle}
      />
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
