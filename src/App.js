import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Homepage from './components/Homepage';

function App() {
  return (
    <div className="App">
      <Header />
      <Homepage />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hola mundo
        </a>
      </header>
    </div>
  );
}

export default App;
