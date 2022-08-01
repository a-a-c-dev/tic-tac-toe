import React from 'react';

export const WinnerContent =React.memo(({turn,winner}) => {
    return(
        <div>    
            {winner?
                    <>
                        <h2>{`The Winner is ${(!turn ? "X" : "Circle")} `}</h2>
                        <h2>
                            {`Well done ${(!turn ? "X!" : "Circle!")}`}
                        </h2>
                    </>
                :
                    <h2>It`s a draw!</h2> 
            } 
        </div>
    )
});