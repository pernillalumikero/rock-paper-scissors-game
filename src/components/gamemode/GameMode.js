import React from 'react'

const GameMode = ({setGameMode}) => {
  return (
    <>  <h3>Välj antal spelare</h3>
          <input
            type="radio"
            id="single"
            name="game-mode"
            onClick={() => setGameMode("Singleplayer")}
          />
          <label htmlFor="single">Singleplayer</label>
          <input
            type="radio"
            id="multi"
            name="game-mode"
            onClick={() => setGameMode("Multiplayer")}
          />
          <label htmlFor="multi">Multiplayer</label>
        </>
  )
}

export default GameMode
