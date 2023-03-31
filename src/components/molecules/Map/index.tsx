import React from 'react'
import GoogleMapReact from 'google-map-react'
import { ContentMap } from './styledComponents'

const Marker = ({ title }: { title: string }) => <div title={title}></div>

const AnyReactComponent = ({
  title
}: {
  text: string
  lat: number
  lng: number
  title: string
}) => (
  <div style={{ position: 'relative', width: '30px', height: '30px' }}>
    <Marker title={title} />
  </div>
)

export const Map = ({ apiKey }: { apiKey: string }) => {
  const location = {
    lat: 6.24825,
    lng: -75.601234,
    text: 'IENEL SAS'
  }

  const defaultProps = {
    center: location,
    zoom: 20
  }

  return (
    <ContentMap>
      <GoogleMapReact
        bootstrapURLKeys={{ key: apiKey }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}>
        <AnyReactComponent
          lat={location.lat}
          lng={location.lng}
          text={location.text}
          title={location.text}
        />
      </GoogleMapReact>
    </ContentMap>
  )
}

// import React, { useState } from 'react'
// import GoogleMapReact from 'google-map-react'

// const AnyReactComponent = ({
//   text,
//   showPopover
// }: {
//   text: string
//   showPopover: boolean
//   lat: number
//   lng: number
// }) => (
//   <div style={{ position: 'relative', width: '10px', height: '10px' }}>
//     {showPopover && (
//       <div
//         style={{
//           position: 'absolute',
//           top: '-235px',
//           left: '-25px',
//           background: '#fff',
//           padding: '6px 8px',
//           color: 'red',
//           borderRadius: '4px',
//           whiteSpace: 'pre'
//         }}>
//         {text}
//       </div>
//     )}
//   </div>
// )

// export const Map = ({ apiKey }: { apiKey: string }) => {
//   const [showPopover, setShowPopover] = useState(true)
//   const location = {
//     lat: 6.24825,
//     lng: -75.601234,
//     text: 'IENEL SAS'
//   }

//   const defaultProps = {
//     center: location,
//     zoom: 20
//   }

//   return (
//     <div style={{ height: '100%', width: '100%' }}>
//       <GoogleMapReact
//         bootstrapURLKeys={{ key: apiKey }}
//         defaultCenter={defaultProps.center}
//         defaultZoom={defaultProps.zoom}
//         onClick={() => setShowPopover(!showPopover)}>
//         <AnyReactComponent
//           lat={location.lat}
//           lng={location.lng}
//           text={location.text}
//           showPopover={showPopover}
//         />
//       </GoogleMapReact>
//     </div>
//   )
// }
