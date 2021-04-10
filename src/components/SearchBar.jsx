import React, { useState } from 'react'

import Icon from '@img/icon-arrow.svg'
import '@styles/components/SearchBar.scss'

const SearchBar = () => {
  const [search, setSearch] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    return console.log(search)
  }

  const inputChange = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div className='search-bar'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Search for any IP address'
          onChange={inputChange}
          value={search}
        />

        <button type='submit'>
          <img src={Icon} alt='search icon' />
        </button>
      </form>
    </div>
  )
}

export default SearchBar
