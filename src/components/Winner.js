import React from 'react';
import {WinnerFoter} from  './WinnerFoter';
import {Score} from './Score';
import {WinnerContent} from './WinnerContent';

export const Winner = ({score,initializeGame,winner, turn,isGameOver}) => {
    return (
        <div className='winner-container'>    
            <Score xScore={score.x} oScore={score.o}/>
            <WinnerContent winner={winner} turn={turn} isGameOver={isGameOver}/>
            <WinnerFoter  initializeGame={initializeGame}/>
      </div>
    )
}


 