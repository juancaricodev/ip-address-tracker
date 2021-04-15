import React, { memo } from 'react'

import '@styles/components/Data.scss'

const Data = (props) => {
  const { ip, city, country, postalCode, timezone, isp } = props

  return (
    <section className='data' aria-label='ip data section'>
      <div className='data__item' aria-label='ip address'>
        <h3 className='data__item-title'>IP ADDRESS</h3>

        <p className='data__item-content'>
          {ip}
        </p>
      </div>

      <span />

      <div className='data__item' aria-label='location'>
        <h3 className='data__item-title'>LOCATION</h3>

        <p className='data__item-content'>
          {`${city}, ${country} ${postalCode}`}
        </p>
      </div>

      <span />

      <div className='data__item' aria-label='timezone'>
        <h3 className='data__item-title'>TIMEZONE</h3>

        <p className='data__item-content'>
          {`UTC ${timezone}`}
        </p>
      </div>

      <span />

      <div className='data__item' aria-label='internet service provider'>
        <h3 className='data__item-title'>ISP</h3>

        <p className='data__item-content'>
          {isp}
        </p>
      </div>
    </section>
  )
}

export default memo(Data)
