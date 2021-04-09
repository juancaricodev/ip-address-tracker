import React, { useState } from 'react'

import Data from '@components/Data'
import SearchBar from '@components/SearchBar'
import '@styles/containers/Content.scss'

const initialData = {
  ip: '8.8.8.8',
  location: {
    country: 'US',
    region: 'California',
    city: 'Mountain View',
    lat: 37.38605,
    lng: -122.08385,
    postalCode: '94035',
    timezone: '-07:00',
    geonameId: 5375480
  },
  domains: [
    '0--9.ru',
    '000.lyxhwy.xyz',
    '000180.top',
    '00049ok.com',
    '001998.com.he2.aqb.so'
  ],
  isp: 'Google LLC',
  proxy: {
    proxy: false,
    vpn: false,
    tor: false
  }
}

const Content = () => {
  const [data, setData] = useState(initialData)

  return (
    <section className='content'>
      <div className='content__title'>IP Address Tracker</div>

      <SearchBar />

      <Data
        ip={data.ip}
        city={data.location.city}
        country={data.location.country}
        postalCode={data.location.postalCode}
        timezone={data.location.timezone}
        isp={data.isp}
      />
    </section>
  )
}

export default Content
