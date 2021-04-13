import React, { useContext, useState } from 'react'

import Icon from '@img/icon-arrow.svg'
// import { useSearch } from '@hooks/useSearch'
import '@styles/components/SearchBar.scss'
import { Context } from '@context/Context'

const SearchBar = () => {
  // const [search, setSearch] = useState('')
  const [input, setInput] = useState('')

  // useSearch(search)
  const { handleIp } = useContext(Context)

  const handleSubmit = (e) => {
    e.preventDefault()

    handleIp(input)
  }

  const inputChange = (e) => {
    setInput(e.target.value)
  }

  return (
    <div className='search-bar'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Search for any IP address'
          onChange={inputChange}
          value={input}
        />

        <button type='submit'>
          <img src={Icon} alt='search icon' />
        </button>
      </form>
    </div>
  )
}

export default SearchBar
