import React from 'react'

const Button = ({ value, player1, player2, setPlayer1, setPlayer2, isTurn, setIsTurn }) => {


    const handleClick = () => {
        // console.log(player1)
        if (isTurn) {
            setPlayer1({ ...player1, choice:  value  })
            setIsTurn(false)
        } else {
            setPlayer2({ ...player2, choice:  value  })
            setIsTurn(true)
        }
    }

    return (
        <button value={value} onClick={handleClick}>
            {value}
        </button>
    );
};

export default Button;
