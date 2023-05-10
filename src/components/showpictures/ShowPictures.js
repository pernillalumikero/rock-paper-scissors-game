import React from 'react'

const ShowPictures = ({ player1, player2 }) => {

    const userImgs = [
        "https://images.unsplash.com/photo-1614032686099-e648d6dea9b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        "https://images.unsplash.com/photo-1614032686163-bdc24c13d0b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        "https://images.unsplash.com/photo-1614032686158-b880f7e82c18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    ];

    const getImg = (choice) => {
        let i = 0
        if (choice === "Sax") {
            i = 0;
        } else if (choice === "Sten") {
            i = 1;
        } else {
            i = 2;
        }
        return i
    }

    const computerImgs = [
        "https://cdn.pixabay.com/photo/2012/04/24/17/17/hand-40512_960_720.png",
        "https://cdn.pixabay.com/photo/2012/04/11/16/11/sign-language-28717_960_720.png",
        "https://cdn.pixabay.com/photo/2014/04/02/10/18/palm-303412_960_720.png",
    ];

    return (
        <>
        <div className="wrapper">
            <div>
                <h2>{player1.name} valde: </h2>
                <div className="img-container">
                    <img
                        src={userImgs[getImg(player1.choice)]}
                        alt={player1.choice}
                    />
            </div>
            </div>
            <div>
                <h2>{player2.name} valde: </h2>
                <div className="img-container">
                    <img src={computerImgs[getImg(player2.choice)]} alt={player2.choice} />
                </div>
            </div>
        </div>
        </>
    )
}

export default ShowPictures
