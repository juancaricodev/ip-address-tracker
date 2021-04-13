import React, { useContext, useState } from 'react'

import Icon from '@img/icon-arrow.svg'
import { Context } from '@context/Context'
import { inputValid } from '../utils/inputValid'
import '@styles/components/SearchBar.scss'

const SearchBar = () => {
  const [input, setInput] = useState('')

  const { handleIp } = useContext(Context)

  const handleSubmit = (e) => {
    e.preventDefault()

    // const newInput = input
    // const regex = /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/

    // const validIp = regex.test(newInput)

    inputValid(input)
      ? handleIp(input)
      : window.alert('Invalid IP')

    // setInput('')
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
