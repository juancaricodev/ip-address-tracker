import React from 'react'

import Data from '@components/Data'
import SearchBar from '@components/SearchBar'
import '@styles/containers/Content.scss'

const Content = () => {
  return (
    <section className='content'>
      <div className='content__title'>
        IP Address Tracker
      </div>

      <SearchBar />

      <Data />
    </section>
  )
}

export default Content
