import React, { useContext } from 'react'

import Data from '@components/Data'
import SearchBar from '@components/SearchBar'
// import { useGeolocation } from '@hooks/useGeolocation'
import { Context } from '@context/Context'
import '@styles/containers/Content.scss'

const Content = () => {
  // const data = useGeolocation()

  const { geolocation } = useContext(Context)
  const data = geolocation

  return (
    <section className='content'>
      <div className='content__title'>IP Address Tracker</div>

      <SearchBar />

      {data
        ? <Data
            ip={data.ip}
            city={data.location.city}
            country={data.location.country}
            postalCode={data.location.postalCode}
            timezone={data.location.timezone}
            isp={data.isp}
          />
        : '...loading'}
    </section>
  )
}

export default Content
