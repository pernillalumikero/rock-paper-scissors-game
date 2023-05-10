import React from "react";
import { useState } from "react";
import Button from "../../button/Button";
import StartButton from "../startbutton/StartButton";
import DecideWinner from "../../decidewinner/DecideWinner";

const Multiplayer = ({ start, setStart, gameMode }) => {
  const [player1, setPlayer1] = useState({
    name: "",
    choice: "",
    isWinner: false,
  });

  const [player2, setPlayer2] = useState({
    name: "",
    choice: "",
    isWinner: false,
  });

  const [game, setGame] = useState([
    {
      player1Name: player1.name,
      player1Choice: player1.choice,
    },
    {
      player2Name: player2.name,
      player2Choice: player2.choice,
    },
  ]);

  const [isTurn, setIsTurn] = useState(true);

  return (
    <>
      {start === false ? 
        <>
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
       : 
        <>
          <h1>Sten-Sax-Påse</h1>
          <p>Gör ditt val: <b>{isTurn ? player1.name : player2.name}</b></p>
          <Button
            value="Sten"
            player1={player1}
            player2={player2}
            setPlayer2={setPlayer2}
            setPlayer1={setPlayer1}
            isTurn={isTurn}
            setIsTurn={setIsTurn}
            gameMode={gameMode}
          />
          {console.log(player1)}
          {console.log(player2)}
          <Button
            value="Sax"
            player1={player1}
            player2={player2}
            setPlayer1={setPlayer1}
            setPlayer2={setPlayer2}
            isTurn={isTurn}
            setIsTurn={setIsTurn}
            gameMode={gameMode}
          />
          <Button
            value="Påse"
            player1={player1}
            player2={player2}
            setPlayer1={setPlayer1}
            setPlayer2={setPlayer2}
            isTurn={isTurn}
            setIsTurn={setIsTurn}
            gameMode={gameMode}
          />
          <DecideWinner player1={player1} player2={player2} setPlayer1={setPlayer1} setPlayer2={setPlayer2}/>
        </>
      }
    </>
  );
};

export default Multiplayer;
