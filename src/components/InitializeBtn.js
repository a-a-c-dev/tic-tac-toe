import React from 'react';


export const  InitializeBtn = ({initializeGame, value}) => {
    return (
        <button onClick={initializeGame} type="reset" className="new-game-btn">{value}</button>
    )
}