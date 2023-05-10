import React, { useEffect, useState } from 'react'

const DecideWinner = ({ player1, player2, setPlayer1, setPlayer2 }) => {
    const [result, setResult] = useState('')
    const compareChoices = () => {

        if(!player1.choice || !player2.choice) {
            return
        } else if(player1.choice === player2.choice){
            setPlayer1({...player1, isWinner: false})
            setPlayer2({...player2, isWinner: false})
            setResult('Oavgjort!')
        } else if( !player1.choice){
            setResult('')
        } else if(
            (player1.choice === 'Sten' && player2.choice === 'Sax') ||
            (player1.choice === 'Sax' && player2.choice === 'Påse') ||
            (player1.choice === 'Påse' && player2.choice === 'Sten')){
                setPlayer1({...player1, isWinner: true})
                setPlayer2({...player2, isWinner: false})
                setResult(`${player1.name} vann!`)
        } else {
                setPlayer1({...player1, isWinner: false})
                setPlayer2({...player2, isWinner: true})
                setResult(`${player2.name} vann!`)
        }
    }
    useEffect(() => {
        compareChoices();
    },[player1.choice, player2.choice])

  return (
    <div>{result}</div>
  )
}

export default DecideWinner