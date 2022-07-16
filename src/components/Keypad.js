// Code Keypad Component Here
import React from 'react'

function Keypad() {

  function onChange() {
    console.log("Entering password...")
  }

  return (
    <input type="password" onChange={onChange} />
  )
}

export default Keypad