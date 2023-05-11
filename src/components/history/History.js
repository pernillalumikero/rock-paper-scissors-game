import React from "react"

const History = ({history}) => {
  
  return (
    <>
      <ul id="ul">
        {history.length > 1 ? 
          history.map((item, index) =>{
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
        }) : null}
      </ul>
    </>
  )
}

export default History
