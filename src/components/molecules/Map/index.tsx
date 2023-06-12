import React, { useState } from 'react'
import GoogleMapReact, { Coords, ChangeEventValue } from 'google-map-react'
import { ContentMap } from './styledComponents'

interface MarkerProps {
  title: string
}

const Marker: React.FC<MarkerProps> = ({ title }) => (
  <div title={title}>
    <img
      src="https://static.vecteezy.com/system/resources/previews/017/178/337/original/location-map-marker-icon-symbol-on-transparent-background-free-png.png"
      alt="Marker Icon"
      style={{
        width: '30px',
        height: '38px',
        objectFit: 'contain',
        background: '#fff',
        borderRadius: '20px'
      }}
    />
  </div>
)

interface AnyReactComponentProps {
  text: string
  lat: number
  lng: number
  title: string
}

const AnyReactComponent: React.FC<AnyReactComponentProps> = ({ title }) => (
  <div style={{ position: 'relative', width: '30px', height: '30px' }}>
    <Marker title={title} />
  </div>
)

interface MapProps {
  apiKey: string
}

const Map: React.FC<MapProps> = ({ apiKey }: MapProps) => {
  const [mapCenter, setMapCenter] = useState<Coords>({
    lat: 6.24857,
    lng: -75.60117
  })
  const location = {
    lat: 6.24857,
    lng: -75.60117,
    text: 'IENEL SAS'
  }

  const handleMapChange = (value: ChangeEventValue) => {
    setMapCenter(value.center)
  }

  const defaultProps = {
    center: mapCenter,
    zoom: 20,
    draggable: true // Habilita el movimiento del marcador
  }

  return (
    <ContentMap style={{ height: '400px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: apiKey }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        onChange={handleMapChange}>
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

export default Map
