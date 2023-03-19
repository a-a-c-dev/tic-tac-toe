import React from 'react';

interface Props {
    value:string,
    initializeGame:(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
} 

export const  InitializeBtn = ({initializeGame, value}:Props) => {
    return (
        <button onClick={e => initializeGame(e)} type="reset" className="new-game-btn">{value}</button>
    )
}