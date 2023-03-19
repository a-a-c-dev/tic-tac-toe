import React from 'react';

export const Turn =React.memo(({turn}:{turn:boolean}) => {
    return(
        <>
            <p>{`Next Player: ${(turn ? "X" : "O")} `}</p>
        </>
    )
});
