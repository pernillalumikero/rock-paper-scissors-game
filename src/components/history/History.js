import React, {useEffect, useState} from 'react'


const History = ({player1, player2, setHistory, history}) => {
  
  

  // useEffect(()=>{
  //   setHistory([
  //     {
  //       playerOne: player1.name,
  //       playerTwo: player2.name,
  //       player1Choice: player1.choice,
  //       player2Choice: player2.choice
  //     },
  //     ...history.splice(0, 9),
  //   ])
  // },[player1, player2])

  return (
    <>
      <ol>
        {history.map((item, index) =>{
          <li key={index}>
            {player1.isWinner ? <b>{item.playerOne}{item.player1Choice}</b>
            : <b>{item.player2Choice}</b>
            }
            </li>
            console.log(item)
        })}
      </ol>
      {console.log(history)}
    </>
  )
}

export default History
