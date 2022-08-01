import React  from "react";
import circleIcon from '../assets/circle.svg';
import xIcon from '../assets/x-icon.svg';

export const SquareIcon = React.memo(({squareDet}) =>{
 return (
            <>
                {
                    squareDet==='x'?<img alt="x" className={squareDet===null?'not-acitve':' active'} 
                    src={xIcon}/>:<img alt="o" className={squareDet===null?'not-active':' active'} src={circleIcon}/>
                    
                }

            </>
    )
})

