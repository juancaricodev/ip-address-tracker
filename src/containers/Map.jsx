import React, { useContext } from 'react'

import L from 'leaflet'
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet'
import { Context } from '@context/Context'
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'
import '@styles/containers/Map.scss'
import 'leaflet/dist/leaflet.css'

const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow
})

L.Marker.prototype.options.icon = DefaultIcon

const ChangeView = ({ center, zoom }) => {
  const map = useMap()
  map.setView(center, zoom)
  return null
}

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
            <ChangeView center={position} zoom={zoom} />
            <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
            <Marker position={position} />
          </MapContainer>)
        : '...loading'}
    </div>
  )
}

export default Map
