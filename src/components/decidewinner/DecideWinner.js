import React, { useEffect, useState } from 'react'
import Score from '../score/Score'
 
const DecideWinner = ({ player1, player2, setPlayer1, setPlayer2, history, setHistory }) => {
    const [result, setResult] = useState('')
    
    const compareChoices = () => {

        if(!player1.choice || !player2.choice) {
            return
        } else if(player1.choice === player2.choice){
            setPlayer1({...player1, isWinner: false})
            setPlayer2({...player2, isWinner: false})
            setHistory([
                {
                    playerOne: player1.name,
                    playerTwo: player2.name,
                    player1Choice: player1.choice,
                    player2Choice: player2.choice,
                    winner: ""
                },
                ...history.splice(0, 9),
              ]);
            setResult('Oavgjort!')
        } else if( !player1.choice){
            setResult('')
        } else if(
            (player1.choice === 'Sten' && player2.choice === 'Sax') ||
            (player1.choice === 'Sax' && player2.choice === 'Påse') ||
            (player1.choice === 'Påse' && player2.choice === 'Sten')){
                setPlayer1({...player1, isWinner: true})
                setPlayer2({...player2, isWinner: false})
                setHistory([
                    {
                        playerOne: player1.name,
                        playerTwo: player2.name,
                        player1Choice: player1.choice,
                        player2Choice: player2.choice,
                        winner: player1.name
                    },
                    ...history.splice(0, 9),
                  ]);
                setResult(`${player1.name} vann!`)
        } else {
                setPlayer1({...player1, isWinner: false})
                setPlayer2({...player2, isWinner: true})
                setHistory([
                    {
                        playerOne: player1.name,
                        playerTwo: player2.name,
                        player1Choice: player1.choice,
                        player2Choice: player2.choice,
                        winner: player2.name
                    },
                    ...history.splice(0, 9),
                  ]);
                setResult(`${player2.name} vann!`)
        }
    }
    useEffect(() => {
        compareChoices();
    },[player1.choice, player2.choice])

  return (
    <div>
    <h2 id="result">{result}</h2>
    <Score player1={player1} player2={player2} result={result} />
    </div>
  )
}

export default DecideWinner