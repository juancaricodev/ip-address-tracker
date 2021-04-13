import React, { useContext } from 'react'

import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import { Context } from '@context/Context'
import '@styles/containers/Map.scss'
import 'leaflet/dist/leaflet.css'

const Map = () => {
  const { position } = useContext(Context)
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
