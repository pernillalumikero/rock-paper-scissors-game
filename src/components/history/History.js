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
      <ul>
        {console.log(player1)}
        {history.map((item, index) =>{
          return (
          
            <li key={index}>
              {item.winner === item.playerOne ?
              
                  <>
                    <b>
                    {item.playerOne}
                    {" "}
                    {item.player1Choice}
                    </b>
                  </> 
                  : <>
                    {item.playerOne}
                    {" "}
                    {item.player1Choice}
                    </> 

            } {" "}
              {item.winner === item.playerTwo ?
              <>
                    <b>
                    {item.playerTwo}
                    {" "}
                    {item.player2Choice}
                    </b>
              </> 
                  : <>
                    {item.playerTwo}
                    {" "}
                    {item.player2Choice}
                    </>
              }
          </li>
          )
        })}
      </ul>
    </>
  )
}

export default History
