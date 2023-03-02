import React,{useId} from "react";
import {Square} from './Square';

export const Squares = ({squareClicked, squares}) => {
    return(
        <div className="squares">    
            {squares.map((square,squareIndex)=>{
            return (
                        <Square key={`${useId}-squareIndex`}  squareDet={square} squareClicked={event=>squareClicked(event,squareIndex) }/>
                    )
            })}
        </div>
    )
}