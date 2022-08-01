import React from 'react';
import {WinnerFoter} from  './WinnerFoter';
import {Score} from './Score';
import {WinnerContent} from './WinnerContent';

export const Winner = ({score,initializeGame,winner, turn}) => {
    return (
        <div className='winner-container'>    
            <Score xScore={score.x} oScore={score.o}/>
            <WinnerContent winner={winner} turn={turn}/>
            <WinnerFoter  initializeGame={initializeGame}/>
      </div>
    )
}


 