import React from 'react'

import { MapContainer, TileLayer, Marker } from 'react-leaflet'

import '@styles/containers/Map.scss'
import 'leaflet/dist/leaflet.css'

const Map = () => {
  const position = [4.60971, -74.08175]
  const zoom = 13

  return (
    <div className='map'>
      {position
        ? (
          <MapContainer
            center={position}
            zoom={zoom}
            zoomControl={false}
          >
            <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
            <Marker position={position} />
          </MapContainer>)
        : '...loading'}
    </div>
  )
}

export default Map
