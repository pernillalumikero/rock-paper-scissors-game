import React from 'react'

const Button = ({ value, player1, player2, setPlayer1, setPlayer2 }) => {


    const handleClick = (e) => {
        if (player1.choice === "") {
            setPlayer1({ ...player1, choice: { value } })
        }
        if(player1.choice !== "") {
            setPlayer2({ ...player2, choice: { value } })
        }
    }

    return (
        <button value={value} onClick={handleClick}>
            {value}
        </button>
    );
};

export default Button;
