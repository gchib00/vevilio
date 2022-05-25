import React, { useState } from 'react'
import './styles/header.css'

const Header = () => {
  const [text, setText] = useState<string>('FREE shipping within EU and USA')

  setTimeout(() => {
    if (text === 'FREE shipping within EU and USA') {
      setText('Satisfaction guaranteed - 100% money-back policy')
    } else {
      setText('FREE shipping within EU and USA')
    }
  }, 4000)

  return (
    <div className='header-banner'>
      <span>{ text }</span>
    </div>
  )
}

export default Header