import React from "react";
import {Square} from './Square';



export const Squares = React.memo(({squareClicked, squares}) => {
    return(
        <div className="squares">    
            {squares.map((square,squareIndex)=>{
            return (
                        <Square key={squareIndex}  squareDet={square} squareClicked={event=>squareClicked(event,squareIndex) }/>
                    )
            })}
        </div>
    )
})