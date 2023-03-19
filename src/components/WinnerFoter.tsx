import React from 'react';
import {InitializeBtn} from './InitializeBtn'

export const WinnerFoter =({initializeGame}:{initializeGame:(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;}) => {
    return(
        <div className='winner-foter'>
                <p >Would you like to play another one?</p>
                <InitializeBtn value="New Game" initializeGame={ initializeGame}/>
        </div>
    )
};




