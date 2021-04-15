import React, { useContext } from 'react'

import { Helmet } from 'react-helmet'

import '@styles/App.scss'
import Content from '@containers/Content'
import Map from '@containers/Map'
import { Context } from '@context/Context'
import { useTitle } from './hooks/useTitle'

const App = () => {
  const { ip, domain } = useContext(Context)

  const title = useTitle(ip, domain)

  return (
    <>
      <Helmet>
        <title>
          {title}
        </title>

        <meta name='description' content='Search for the location of any IP among with another key information.' />
      </Helmet>

      <main>
        <Content />
        <Map />
      </main>
    </>
  )
}

export default App
