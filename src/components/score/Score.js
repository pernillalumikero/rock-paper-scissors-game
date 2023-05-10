import React, {useEffect, useState} from 'react'

const Score = ({result, player1, player2}) => {

  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);

  useEffect(() => {
    const scoreKeeper = () => {
      if (result === `${player1.name} vann!`) {
        setPlayer1Score(player1Score + 1);
      } else if (result === `${player2.name} vann!`) {
        setPlayer2Score(player2Score + 1);
      }
    };
    scoreKeeper();
  }, [player1, player2]);

  return (
    <div>
      <p>
        Ställningen är {player1.name}: {player1Score} {player2.name}: {player2Score}
      </p>
    </div>
  )
}

export default Score
