import React from "react";
import { useState } from "react";
import Button from "../../button/Button";
import StartButton from "../startbutton/StartButton";
import DecideWinner from "../../decidewinner/DecideWinner";
import History from "../history/History";

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

  const [isTurn, setIsTurn] = useState(true);

  const [history, setHistory] = useState([{
    playerOne: player1.name,
    playerTwo: player2.name,
    player1Choice: player1.choice,
    player2Choice: player2.choice,
    winner: ""
  }
  ]);

  const buttonValues = ["Sten", "Sax", "Påse"];

  const buttons = buttonValues.map((value, index) => (
    <Button
      key={index}
      value={value}
      player1={player1}
      player2={player2}
      setPlayer2={setPlayer2}
      setPlayer1={setPlayer1}
      isTurn={isTurn}
      setIsTurn={setIsTurn}
      setHistory={setHistory}
      gameMode={gameMode}
    />
  ));

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
          <p>Gör ditt val: <b>{isTurn ? player1.name : player2.name}</b></p>
          <div>{buttons}</div>
          <DecideWinner player1={player1} player2={player2} setPlayer1={setPlayer1} setPlayer2={setPlayer2} history={history} setHistory={setHistory} />
          <History player1={player1} player2={player2} history={history} />
        </>
      }
    </>
  );
};

export default Multiplayer;
