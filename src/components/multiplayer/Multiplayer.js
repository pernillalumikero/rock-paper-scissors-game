import React from 'react'
import { useState } from 'react';
import StartButton from '../startbutton/StartButton'

const Multiplayer = ({start, setStart}) => {

    const [playerOne, setPlayerOne] = useState("");
    const [playerTwo, setPlayerTwo] = useState("");

    return (
        <>
        {start === false ? <>
            <input
                required
                type="text"
                placeholder="Enter player 1.."
                name="player1"
                value={playerOne}
                onChange={(e) => setPlayerOne(e.target.value)}
            ></input>
            <input
                required
                type="text"
                placeholder="Enter player 2.."
                name="player2"
                value={playerTwo}
                onChange={(e) => setPlayerTwo(e.target.value)}
            ></input>
            <StartButton setStart={setStart} />
        </> 
    : null}
    </>  
    )
}

export default Multiplayer
