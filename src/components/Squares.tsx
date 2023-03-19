import React,{useId} from "react";
import {Square} from './Square';
interface Props {
    squares: (string|null) [] ,
    squareClicked: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, squareIndex: number) => void;
} 


export const Squares = ({squareClicked, squares}:Props) => {
    return(
        <div className="squares">    
            {squares.map((square,squareIndex)=>{
            return (
                        <Square key={`${useId}-squareIndex`}  squareDet={square} squareClicked={(event:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>squareClicked(event,squareIndex) }/>
                    )
            })}
        </div>
    )
}