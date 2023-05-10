import { useState } from 'react';
import './App.css';
import GameMode from './components/gamemode/GameMode';
import Singleplayer from './components/singleplayer/Singleplayer';
import Multiplayer from './components/multiplayer/Multiplayer';



function App() {

  const [gameMode, setGameMode] = useState(null);
  const [start, setStart] = useState(false);

  return (
    <div className="App">
      {gameMode === null && start === false ? 
      <GameMode setGameMode={setGameMode} /> : null}
      {gameMode === "Singleplayer" 
      ? <Singleplayer start={start} setStart={setStart} gameMode={gameMode} /> 
      : gameMode === "Multiplayer" 
      ?  <Multiplayer start={start} setStart={setStart} gameMode={gameMode} />
      : null }
    </div>
  );
}

export default App;
