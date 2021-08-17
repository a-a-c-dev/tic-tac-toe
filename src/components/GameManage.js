import React from 'react';
import {InitializeBtn} from './InitializeBtn';

const GameManage = ({score,turn,initializeGame}) => {
    return (
        <div className="game-manage" >
            <div className="contestant-score">
                <h3>Total score</h3> <p>{`X:${score.x} Circle:${score.o}`}</p>
                <br/>
                <p>
                    { "Next Player: " + (turn ? "X" : "O")}
                </p>
            </div>
            
            <InitializeBtn initializeGame={initializeGame}/>
        </div>
    ) 
}

export default GameManage;