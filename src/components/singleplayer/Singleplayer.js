import React, { useState, useEffect } from 'react'
import Button from '../../button/Button';
import StartButton from '../startbutton/StartButton'
import DecideWinner from '../../decidewinner/DecideWinner';
import History from '../history/History';


const Singleplayer = ({ start, setStart, gameMode }) => {

  const [isTurn, setIsTurn] = useState(true);
  const [player, setPlayer] = useState({
    name: "",
    choice: "",
    isWinner: false,
  })
  const [computer, setComputer] = useState({
    name: "Dator Hans",
    choice: "",
    isWinner: false,
  })

  const [history, setHistory] = useState([{
    playerOne: player.name,
    playerTwo: computer.name,
    player1Choice: player.choice,
    player2Choice: computer.choice
  }

  ]);


  const [game, setGame] = useState([{
    playerName: player.name,
    playerChoice: player.choice
  }, {
    computerName: computer.name,
    computerChoice: computer.choice
  }])

  const makeComputerChoice = () => {
    const computerClick = parseInt(Math.floor((Math.random() * 3) + 1))

    if(computerClick === 1) {
      setComputer({ ...computer, choice:  "Sten"  })
    } else if( computerClick === 2) {
      setComputer({ ...computer, choice:  "Sax"  })    
    } else {
        setComputer({ ...computer, choice:  "Påse"  })
      }
}


useEffect (() => {
 
  if(player.choice && computer.choice) {
    setPlayer({...player, choice: ""})
    setComputer({...computer, choice: ""})
    console.log(player.choice)
  }
  // {!isTurn ? makeComputerChoice() : isTurn}
},[player.choice, computer.choice])

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
        : 
        <>
          <h1>Sten-Sax-Påse</h1>
          <p>Gör ditt val</p>
          <Button
            value="Sten"
            player1={player}
            computer={computer}
            setComputer={setComputer}
            setPlayer1={setPlayer}
            isTurn={isTurn}
            setIsTurn={setIsTurn}
            gameMode={gameMode}
            makeComputerChoice={makeComputerChoice}
            setHistory={setHistory}
            history={history}
          />
           <Button
            value="Sax"
            player1={player}
            computer={computer}
            setComputer={setComputer}
            setPlayer1={setPlayer}
            isTurn={isTurn}
            setIsTurn={setIsTurn}
            gameMode={gameMode}
            makeComputerChoice={makeComputerChoice}
            setHistory={setHistory}
            history={history}
          />
           <Button
            value="Påse"
            player1={player}
            computer={computer}
            setComputer={setComputer}
            setPlayer1={setPlayer}
            isTurn={isTurn}
            setIsTurn={setIsTurn}
            gameMode={gameMode}
            makeComputerChoice={makeComputerChoice}
            setHistory={setHistory}
            history={history}
          />
          <DecideWinner player1={player} player2={computer} setPlayer1={setPlayer} setPlayer2={setComputer}/>
          <History player1={player} player2={computer} history={history} />
        </>
         }
    </>
  )
}

export default Singleplayer
