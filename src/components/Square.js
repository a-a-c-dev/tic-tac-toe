import React from 'react';
import { SquareIcon } from './SquareIcon';

export const Square =({squareDet,squareClicked}) => {
    return(
        <>
            <button  onClick={squareClicked} >
                <SquareIcon squareDet={squareDet}/>
            </button>
        </>
    )
};