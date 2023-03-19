import React from 'react';
import { SquareIcon } from './SquareIcon';

interface Props {
    squareDet:string | null,
    squareClicked: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
} 

export const Square =({squareDet,squareClicked}:Props) => {
    return(
        <>
            <button className="square"  onClick={squareClicked} >
                <SquareIcon squareDet={squareDet}/>
            </button>
        </>
    )
};