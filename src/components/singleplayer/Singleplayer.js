import React from 'react'
import { useState } from 'react';
import StartButton from '../startbutton/StartButton'

const Singleplayer = ({setStart}) => {

    const [playerOne, setPlayerOne] = useState("");

  return (
    <>
          <input
            type="text"
            placeholder="Enter name.."
            name="player1"
            value={playerOne}
            onChange={(e) => setPlayerOne(e.target.value)}
          ></input>
          <StartButton setStart={setStart} />
        </>
  )
}

export default Singleplayer
