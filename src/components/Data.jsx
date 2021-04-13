import React from 'react'

import '@styles/components/Data.scss'

const Data = (props) => {
  const { ip, city, country, postalCode, timezone, isp } = props

  return (
    <div className='data'>
      <div className='data__item'>
        <h3 className='data__item-title'>IP ADDRESS</h3>

        <p className='data__item-content'>
          {ip}
        </p>
      </div>

      <span />

      <div className='data__item'>
        <h3 className='data__item-title'>LOCATION</h3>

        <p className='data__item-content'>
          {`${city}, ${country} ${postalCode}`}
        </p>
      </div>

      <span />

      <div className='data__item'>
        <h3 className='data__item-title'>TIMEZONE</h3>

        <p className='data__item-content'>
          {`UTC ${timezone}`}
        </p>
      </div>

      <span />

      <div className='data__item'>
        <h3 className='data__item-title'>ISP</h3>

        <p className='data__item-content'>
          {isp}
        </p>
      </div>
    </div>
  )
}

export default Data
