import React from 'react';
import bgImg from '../assets/tic-tac-toe-bg-memo.jpg';
import LazyLoad from 'react-lazy-load';


export const BackgroundContainer =React.memo(() => {
    return(
        <div className="background-container">
              <LazyLoad >
                  <img src={bgImg} alt="background"></img>
              </LazyLoad>     
        </div>
    )
});
