import React, { lazy, Suspense, useContext } from 'react'

import { Helmet } from 'react-helmet'

import '@styles/App.scss'
import Content from '@containers/Content'
import { Context } from '@context/Context'

const Map = lazy(() => import('@containers/Map'))

const App = () => {
  const { ip } = useContext(Context)

  return (
    <>
      <Helmet>
        <title>
          {ip.length > 0 ? `${ip} | IP Address Tracker` : 'IP Address Tracker'}
        </title>

        <meta name='description' content='Search for the location of any IP among with another key information.' />
      </Helmet>

      <main>
        <Content />

        <Suspense fallback={<h3>Loading...</h3>}>
          <Map />
        </Suspense>
      </main>
    </>
  )
}

export default App
