import React from 'react';
import {GameManage}  from './GameManage';
import  {Winner}  from './Winner';

export const BoardContent = ({score,isGameOver,winner,turn, initializeGame}) => {
    return (
        <>
            {!isGameOver  && !winner
                ?       
                <GameManage score={score} winner={winner} turn={turn} initializeGame={initializeGame}/>
                : 
                <Winner score={score} winner={winner} turn={turn} initializeGame={initializeGame}/>
            }
        </>
    ) 
}

