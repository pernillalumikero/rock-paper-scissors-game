import React from 'react'
import { useState } from 'react';
import StartButton from '../startbutton/StartButton'

const Singleplayer = ({ start, setStart }) => {

  const [player, setPlayer] = useState({
    name: "",
    choice: ""
  })

  const [computer, setComputer] = useState({
    name: "Dator Hans",
    choice: ""
  })

  const [game, setGame] = useState([{
    playerName: player.name,
    playerChoice: player.choice
  }, {
    computerName: computer.name,
    computerChoice: computer.choice
  }])

  return (
    <>
      {start === false ? <>
        <input
          type="text"
          placeholder="Enter name.."
          name="player1"
          value={player.name}
          onChange={(e) => setPlayer({name: e.target.value})}
        ></input>
        <StartButton setStart={setStart} />
      </>
        : null }
    </>
  )
}

export default Singleplayer
