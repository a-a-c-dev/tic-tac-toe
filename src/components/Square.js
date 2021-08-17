import React from 'react';
import circleIcon from '../assets/circle.svg';
import xIcon from '../assets/x-icon.svg';

const Square = ({squareDet,squareClicked}) => {
    return(
        <>
            <button  onClick={squareClicked} >
                {squareDet==='x'?<img alt="x" className={squareDet===null?'not-acitve':' active'} src={xIcon}/>:<img alt="o" className={squareDet===null?'not-active':' active'} src={circleIcon}/>}
            </button>
        </>
    )
};


export default Square;