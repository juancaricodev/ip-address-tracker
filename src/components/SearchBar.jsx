import React from 'react'

import Search from '@img/icon-arrow.svg'
import '@styles/components/SearchBar.scss'

const SearchBar = () => {
  return (
    <div className='search-bar'>
      <form>
        <input
          type='text'
          placeholder='Search for any IP address'
        />

        <button type='submit'>
          <img src={Search} alt='search icon' />
        </button>
      </form>
    </div>
  )
}

export default SearchBar
