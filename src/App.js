import './style/App.css';
import { useState } from 'react';
import Button from './AppComponent/Button';
import Start from './AppComponent/Start';
import End from './AppComponent/End';
function App() {

  const [turn, setTurn] = useState(' mySelect');
  const select = (e) => {
    e.target.className += turn;
    turnEnd();
  }
  const turnEnd = () => {
    if(turn === ' mySelect')  setTurn(' yourSelect');
    else setTurn(' mySelect');
  }

  const buttonArray = () => {
    let arr = [];
    for (let i=1; i<=64; i++){
      if(i%2 === 1 && i%16 <= 8){
        arr.push(<Button color="white" id={i} onClick={select} turn={turn}/>);
      } else if((i%2 === 0 && i%16 > 8) || i%16 === 0){
          arr.push(<Button color="white" id={i} onClick={select} turn={turn}/>);
      } else {
        arr.push(<Button color="black" id={i} onClick={select} turn={turn}/>);
      }
    }
    return arr;
  }

  // 내 턴 - 흰돌
  return (
    <div className='App'>
      <div className="gameBoard">
        {buttonArray()}
      </div>
      <div>
        <Start></Start>
        <button className='passButton' onClick={turnEnd}>넘기기</button><br></br>
        <End></End>
      </div>
    </div>
  );
}

export default App;
