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
