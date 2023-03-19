import React from 'react';
import {GameManage}  from './GameManage';
import  {Winner}  from './Winner';


interface Props {
    score:Score,
    isGameOver:boolean,
    winner: string |null ,
    turn:boolean,
    initializeGame:(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
} 
interface Score{
    x:number,
    o:number
  }
   

export const BoardContent = ({score,isGameOver,winner,turn, initializeGame}: Props) => {
    return (
        <>
            {!isGameOver  && !winner
                ?       
                <GameManage score={score}  turn={turn} initializeGame={initializeGame}/>
                : 
                <Winner  score={score} winner={winner} turn={turn} initializeGame={initializeGame}/>
            }
        </>
    ) 
}

