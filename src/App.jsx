import React, { useContext, useEffect, useState } from 'react'

import { Helmet } from 'react-helmet'

import '@styles/App.scss'
import Content from '@containers/Content'
import Map from '@containers/Map'
import { Context } from '@context/Context'

const App = () => {
  const [title, setTitle] = useState('IP Address Tracker')
  const { ip, domain } = useContext(Context)

  useEffect(() => {
    if (ip.length > 0) {
      setTitle(`${ip} | IP Address Tracker`)
    } else if (domain.length > 0) {
      setTitle(`${domain} | IP Address Tracker`)
    }
  }, [ip, domain])

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
