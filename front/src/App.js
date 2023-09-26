import 'react-tooltip/dist/react-tooltip.css'
import './App.css';
import Logo from './components/Logo';
import Logout from './components/Logout';

const headerOptions = ['Usuários', 'Pagamentos', 'Pendências']

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo></Logo>
        <ul className="header-options">
          { 
            headerOptions.map (
              (option) => (<li className="option">{option}</li>)
            )
          }
        </ul>
        <Logout></Logout>
      </header>
    </div>
  );
}

export default App;
