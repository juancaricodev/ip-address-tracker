import React from 'react'

import '@styles/App.scss'
import Data from '@components/Data'
import SearchBar from '@components/SearchBar'

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
