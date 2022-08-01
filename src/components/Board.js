import React,{useState, useEffect,useCallback,useMemo} from 'react';
import {Squares} from './Squares';
import {BoardContent}  from './BoardContent';

const  calculateWinner =(squares => {
  const possibilities = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let index = 0; index < possibilities.length; index++) {
    const [a, b, c] = possibilities[index];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return  squares[a] ;            
    }
  }
  return null;
})

const Board = () => {
    const[squares, setSquares] = useState(Array(9).fill(null))
    const [score,setScore] = useState({
      x:0,
      o:0
    })
    const [isGameOver,setIsGameOver] = useState(false)
    const [turnCounter, setTurnCounter] = useState(1)
    const [turn, setTurn] = useState(true);
  
    const winner = useMemo(()=> calculateWinner(squares),[squares])
    const squareClicked = (event,squareIndex) => {
        event.preventDefault();
        const copySquares = [...squares];
        if(winner||copySquares[squareIndex]) return ; 
        copySquares[squareIndex]= turn?"x":'O'
        setSquares(copySquares);
        setTurn(!turn);
    }
    const initializeGame = () =>{
        setSquares(Array(9).fill(null))
        setIsGameOver(false);
        setTurnCounter(1);
    }
    useEffect((()=>{
      setTurnCounter(previousCounter=> previousCounter+1)
      if(turnCounter>9){
        setIsGameOver(true)
      }
    }),[squares])
    useEffect(()=>{
      if (turnCounter===1)return
      !turn?setScore(prevScore=> ({...prevScore,x:prevScore.x+1})):setScore(prevScore=> ({...prevScore,o:prevScore.o+1}))
    },[winner])
    return (
        <div className={winner?"board-container win":"board-container"}>
                <BoardContent score={score} isGameOver={isGameOver} winner={winner} turn={turn} initializeGame={initializeGame}/>
                <Squares squareClicked={squareClicked} squares={squares}/>
        </div>
    )
}


export default Board;