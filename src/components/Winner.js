import React from 'react';
import {InitializeBtn} from  './InitializeBtn';

export const Winner = React.memo(({score,initializeGame,winner, turn}) => {
    return (
        <div className='winner-container'>    
            {winner?
                    <h2>{`${(!turn ? "X" : "Circle")}  Is the winner! Well done ${(!turn ? "X" : "Circle")}`  }</h2>
                :
                     <h2>It`s a draw!</h2> 
            }
                <div className="score">
                    <h3>Total score:</h3>
                    <p>{`X: ${score.x} Circle: ${score.o}`}</p>
                </div>       
                <p >Would you like to play another one?</p>
            <InitializeBtn value="New Game" initializeGame={initializeGame}/>
      </div>
    )
})


 