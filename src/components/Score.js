import React from 'react';

export const Score =React.memo(({xScore,oScore}) => {
    return(
        <div className="score">
            <h3>Total score:</h3>
            <p>{`X: ${xScore} Circle: ${oScore}`}</p>
        </div>
    )
});
