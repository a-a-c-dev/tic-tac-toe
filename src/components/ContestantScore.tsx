import React from 'react';
import {Score} from './Score';
import {Turn} from './Turn';

interface Props {
    xScore:number,
    oScore:number,
    turn:boolean  
} 

export const ContestantScore = React.memo(({xScore,oScore,turn}:Props) => {
    return (
            <div className="contestant-score">
                <Score xScore={xScore} oScore={oScore}/>
                <Turn turn={turn}/>
            </div>
        ) 
})

