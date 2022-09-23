import './style/App.css';
import WhiteButton from './AppComponent/WhiteButton';
import BlackButton from './AppComponent/BlackButton';

function App() {
  return (
    <div className='App'>
      <div className="gameBoard">
        <WhiteButton /><BlackButton /><WhiteButton /><BlackButton />
        <BlackButton /><WhiteButton /><BlackButton /><WhiteButton />
      </div>
    </div>
  );
}

export default App;
