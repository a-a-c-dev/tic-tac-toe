import React from 'react';
interface Props{
    turn:boolean,
    winner:string|null

}

export const WinnerContent =React.memo(({turn,winner}: Props) => {
    return(
        <div>    
            {winner?
                    <>
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