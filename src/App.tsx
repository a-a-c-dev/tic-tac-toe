import {Header} from './components/Header';
import {BackgroundContainer} from './components/BackgroundContainer';
import Board from './components/Board';
import './App.css'




const App = () =>{

  return (
      <>
        <BackgroundContainer/>
        <div className="game-container">
          <Header/>
          <Board/>
        </div>
      </> 
 )}

export default App;
