import React from 'react'

const StartButton = ({setStart}) => {
  return (
    <button onClick={() => setStart(true)}>Starta</button>
  )
}

export default StartButton
