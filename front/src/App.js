import './App.css';
import laundryLogo from './img/laundry-logo.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-logo">
          <img src={laundryLogo} alt="landry logo"></img>
          <p>Lavanderia</p>
        </div>
      </header>
    </div>
  );
}

export default App;
