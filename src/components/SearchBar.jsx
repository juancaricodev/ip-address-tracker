import React, { memo, useContext, useState } from 'react'

import Icon from '@img/icon-arrow.svg'
import { Context } from '@context/Context'
import { inputValid } from '@utils/inputValid'
import '@styles/components/SearchBar.scss'

const SearchBar = () => {
  const [input, setInput] = useState('')

  const { handleIp } = useContext(Context)

  const handleSubmit = (e) => {
    e.preventDefault()

    inputValid(input)
      ? handleIp(input)
      : window.alert('Invalid IP')
  }

  const inputChange = (e) => {
    setInput(e.target.value)
  }

  return (
    <div className='search-bar' aria-label='search bar'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Search for any IP address'
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

export default memo(SearchBar)
