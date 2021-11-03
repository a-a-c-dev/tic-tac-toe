import {Header} from './components/Header';
import Board from './components/Board';
import bgImg from './assets/tic-tac-toe-bg-memo.jpg';
import './App.css'




const App = () =>{

  return (
      <>
        <div className="background-container">
          <img src={bgImg}></img>
        </div>
        <div className="game-container">
          <Header/>
          <Board/>
        </div>
      </> 
 )}

export default App;
