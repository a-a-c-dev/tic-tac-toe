import React from 'react';
import {InitializeBtn} from  './InitializeBtn';

 const Winner = ({score,initializeGame,winner, turn}) => {
    return (
        <div className='winner-container'>    
          
            {winner?
                    <h2>{(!turn ? "X" : "O") + ' Is the winner Well done '  }     </h2>
                :
                     <h2>It`s a draw!</h2> 
            }
            <h3>Total Score{`X:${score.x} Circle:${score.o}`}</h3>
            <p>Would you like to play another one?</p>
            <InitializeBtn initializeGame={initializeGame}/>
      </div>
    )
}


export default Winner;