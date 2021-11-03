import React from 'react';
import {InitializeBtn} from './InitializeBtn';

export const GameManage = React.memo(({score,turn,initializeGame}) => {
    return (
        <div className="game-manage" >
            <div className="contestant-score">
                <div className="score">
                    <h3>Total score:</h3>
                    <p>{`X: ${score.x} Circle: ${score.o}`}</p>
                </div>
                <p>{`Next Player: ${(turn ? "X" : "O")} `}</p>
            </div>
            <InitializeBtn value="Reset Game" initializeGame={initializeGame}/>
        </div>
    ) 
})

