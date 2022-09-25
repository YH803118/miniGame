import './style/App.css';
import { useState } from 'react';
import WhiteButton from './AppComponent/WhiteButton';
import BlackButton from './AppComponent/BlackButton';

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
    for (let i=1; i<=16; i++){
      if(i%2 == 1 && i%8 <= 4){
        arr.push(<WhiteButton id={i} onClick={select} />);
      } else if(i%2 == 0 && i%9 > 4){
          arr.push(<WhiteButton id={i} onClick={select} />);
      } else {
        arr.push(<BlackButton id={i} onClick={select} />);
      }
    }
    return arr;
  }

  return (
    <div className='App'>
      <div className="gameBoard">
        {buttonArray()}
      </div>
    </div>
  );
}

export default App;
