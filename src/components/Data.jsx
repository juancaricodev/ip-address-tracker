import React from 'react'

import '@styles/components/Data.scss'

const Data = () => {
  return (
    <div className='data'>
      <div className='data__item'>
        <h3 className='data__item-title'>IP ADDRESS</h3>

        <p className='data__item-content'>192.212.174.101</p>
      </div>

      <span />

      <div className='data__item'>
        <h3 className='data__item-title'>LOCATION</h3>

        <p className='data__item-content'>Bogotá, CO</p>
      </div>

      <span />

      <div className='data__item'>
        <h3 className='data__item-title'>TIMEZONE</h3>

        <p className='data__item-content'>UTC -05:00</p>
      </div>

      <span />

      <div className='data__item'>
        <h3 className='data__item-title'>ISP</h3>

        <p className='data__item-content'>Google</p>
      </div>
    </div>
  )
}

export default Data
