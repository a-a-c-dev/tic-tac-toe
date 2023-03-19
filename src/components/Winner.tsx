import React from 'react';
import {WinnerFoter} from  './WinnerFoter';
import {Score} from './Score';
import {WinnerContent} from './WinnerContent';

interface Props {
    score:Score,
    winner: string |null ,
    turn:boolean,
    initializeGame:(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
} 
interface Score{
    x:number,
    o:number
  }
export const Winner = ({score,initializeGame,winner, turn}:Props) => {
    return (
        <div className='winner-container'>    
            <Score xScore={score.x} oScore={score.o}/>
            <WinnerContent winner={winner} turn={turn} />
            <WinnerFoter  initializeGame={initializeGame}/>
      </div>
    )
}


 