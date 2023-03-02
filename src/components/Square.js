import React from 'react';
import { SquareIcon } from './SquareIcon';

export const Square =({squareDet,squareClicked}) => {
    return(
        <>
            <button className="square"  onClick={squareClicked} >
                <SquareIcon squareDet={squareDet}/>
            </button>
        </>
    )
};