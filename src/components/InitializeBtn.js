import React from 'react';


export const  InitializeBtn = ({initializeGame}) => {
    return (
        <button onClick={initializeGame} type="reset" className="new-game-btn">New Game</button>
    )
}