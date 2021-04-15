import React, { useContext, useState } from 'react'

import Icon from '@img/icon-arrow.svg'
import { Context } from '@context/Context'
import { ipValid, domainValid } from '@utils/inputValid'
import '@styles/components/SearchBar.scss'

const SearchBar = () => {
  const [input, setInput] = useState('')

  const { handleIp, handleDomain } = useContext(Context)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (ipValid(input)) {
      handleIp(input)
    } else if (domainValid(input)) {
      handleDomain(input)
    } else {
      window.alert('IP or Domain is invalid.')
    }
  }

  const inputChange = (e) => {
    setInput(e.target.value)
  }

  return (
    <div className='search-bar' aria-label='search bar'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Search for any IP address or domain'
          onChange={inputChange}
          value={input}
          aria-label='ip input'
        />

        <button type='submit' aria-label='search'>
          <img src={Icon} alt='search icon' />
        </button>
      </form>
    </div>
  )
}

export default SearchBar
