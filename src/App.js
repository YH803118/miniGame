import './style/App.css';
import { useState } from 'react';
import Button from './AppComponent/Button';


function App() {

  const [gameHistory, setGameHistory] = useState([]);

  const [turn, setTurn] = useState(' mySelect');
  const select = (e) => {
    e.target.className += turn;
    if(turn == ' mySelect')  setTurn(' yourSelect');
    else setTurn(' mySelect');
    setGameHistory([...gameHistory, e.target.id]);
    console.log(gameHistory);

  }

  const buttonArray = () => {
    let arr = [];
    for (let i=1; i<=64; i++){
      if(i%2 == 1 && i%16 <= 8){
        arr.push(<Button color="white" id={i} onClick={select} />);
      } else if(i%2 == 0 && i%16 > 8 || i%16 == 0){
          arr.push(<Button color="white" id={i} onClick={select} />);
      } else {
        arr.push(<Button color="black" id={i} onClick={select} />);
      }
    }
    return arr;
  }

  const startButton = () => {

  }

  return (
    <div className='App'>
      <div className="gameBoard">
        {buttonArray()}
      </div>
      <div>
        <button>시작</button>
      </div>
    </div>
  );
}

export default App;
