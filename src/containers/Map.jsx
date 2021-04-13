import React from 'react'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import '@styles/containers/Map.scss'
import 'leaflet/dist/leaflet.css'

const Map = () => {
  const position = [4.60971, -74.08175]
  const zoom = 15

  return (
    <div className='map'>
      <MapContainer
        center={position}
        zoom={zoom}
        scrollWheelZoom={false}
        zoomControl={false}
        style={{ width: '100%' }}
      >
        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
        <Marker position={position}>
          {/* <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup> */}
        </Marker>
      </MapContainer>
    </div>
  )
}

export default Map
