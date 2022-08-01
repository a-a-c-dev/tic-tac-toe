import React from 'react';
import {Score} from './Score';
import {Turn} from './Turn';

export const ContestantScore = React.memo(({xScore,oScore,turn}) => {
    return (
            <div className="contestant-score">
                <Score xScore={xScore} oScore={oScore}/>
                <Turn turn={turn}/>
            </div>
        ) 
})

