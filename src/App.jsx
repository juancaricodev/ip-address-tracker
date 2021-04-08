import React from 'react'

import Data from '@components/Data'
import SearchBar from '@components/SearchBar'
import '@styles/App.scss'

const App = () => {
  return (
    <>
      <section className='content'>
        <div className='content__title'>
          Title
        </div>

        <SearchBar />

        <Data />
      </section>

      <section className='map'>
        Map
      </section>
    </>
  )
}

export default App
