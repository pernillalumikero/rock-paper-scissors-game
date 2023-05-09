import React from 'react'
import { useState } from 'react';
import Button from '../../button/Button';
import StartButton from '../startbutton/StartButton'

const Multiplayer = ({ start, setStart }) => {

    const [player1, setPlayer1] = useState({
        name: "",
        choice: ""
    })

    const [player2, setPlayer2] = useState({
        name: "",
        choice: ""
    })

    const [game, setGame] = useState([{
        player1Name: player1.name,
        player1Choice: player1.choice
    }, {
        player2Name: player2.name,
        player2Choice: player2.choice
    }])

    const [turn, setTurn] = useState(true)



    return (
        <>
            {start === false ? <>
                <input
                    required
                    type="text"
                    placeholder="Enter player 1.."
                    name="player1"
                    value={player1.name}
                    onChange={(e) => setPlayer1({ name: e.target.value })}
                ></input>
                <input
                    required
                    type="text"
                    placeholder="Enter player 2.."
                    name="player2"
                    value={player2.name}
                    onChange={(e) => setPlayer2({ name: e.target.value })}
                ></input>
                <StartButton setStart={setStart} />
            </>
                : <>
                    <h1>Sten-Sax-Påse</h1>
                    <p>Gör ditt val:</p>
                    <Button value="Sten" player1={player1} player2={player2} setPlayer2={setPlayer2} setPlayer1={setPlayer1} />
                    {console.log(player1)}
                    {console.log(player2)}
                    <Button value="Sax" />
                    <Button value="Påse" />
                </>}
        </>
    )
}

export default Multiplayer
