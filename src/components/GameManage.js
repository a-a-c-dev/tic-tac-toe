import React from 'react';
import {InitializeBtn} from './InitializeBtn';
import {ContestantScore} from './ContestantScore';

export const GameManage = ({score,turn,initializeGame}) => {
    return (
        <div className="game-manage" >
            <ContestantScore xScore={score.x} oScore={score.o} turn={turn}/>
            <InitializeBtn value="Reset Game" initializeGame={initializeGame}/>
        </div>
    ) 
}

