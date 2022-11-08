import React from 'react';

export const Turn =React.memo(({turn}) => {
    return(
        <>
            <p>{`Next Player: ${(turn ? "X" : "O")} `}</p>
        </>
    )
});
