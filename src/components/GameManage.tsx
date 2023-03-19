import React from 'react';
import {InitializeBtn} from './InitializeBtn';
import {ContestantScore} from './ContestantScore';


interface Props {
    score:Score,
    turn:boolean,
    initializeGame:(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
} 
interface Score{
    x:number,
    o:number
  }
   

export const GameManage = ({score,turn,initializeGame}:Props) => {
    return (
        <div className="game-manage" >
            <ContestantScore xScore={score.x} oScore={score.o} turn={turn}/>
            <InitializeBtn value="Reset Game" initializeGame={initializeGame}/>
        </div>
    ) 
}

