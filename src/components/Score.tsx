import React from 'react';

interface Score {
    xScore:number,
    oScore:number
}

export const Score =React.memo(({xScore,oScore}:Score) => {
    return(
        <div className="score">
            <h3>Total score:</h3>
            <p>{`X: ${xScore} Circle: ${oScore}`}</p>
        </div>
    )
});
