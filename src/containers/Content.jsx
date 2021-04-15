import React, { useContext } from 'react'

import Data from '@components/Data'
import SearchBar from '@components/SearchBar'
import { Context } from '@context/Context'
import '@styles/containers/Content.scss'

const Content = () => {
  const { geolocation } = useContext(Context)

  return (
    <section className='content' aria-label='content section'>
      <h1 className='content__title' aria-label='title'>IP Address Tracker</h1>

      <SearchBar />

      {geolocation
        ? <Data
            ip={geolocation.ip}
            city={geolocation.location.city}
            country={geolocation.location.country}
            postalCode={geolocation.location.postalCode}
            timezone={geolocation.location.timezone}
            isp={geolocation.isp}
          />
        : '...loading'}
    </section>
  )
}

export default Content
