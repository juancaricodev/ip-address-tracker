import React, { lazy, Suspense, useContext } from 'react'

import { Context } from '@context/Context'
import '@styles/containers/Content.scss'

const Data = lazy(() => import('@components/Data'))
const SearchBar = lazy(() => import('@components/SearchBar'))

const Content = () => {
  const { geolocation } = useContext(Context)

  return (
    <section className='content' aria-label='content section'>
      <h1 className='content__title' aria-label='title'>IP Address Tracker</h1>

      <Suspense fallback={<h3>Loading...</h3>}>
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
      </Suspense>
    </section>
  )
}

export default Content
