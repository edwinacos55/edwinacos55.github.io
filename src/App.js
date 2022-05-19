import logo from './Edwin_Acosta.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          My name is Edwin Acosta and I'm going to master React!!
        </p>
        <a
          className="App-link"
          href="https://github.com/edwinacos55/edwinacos55.github.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check me out!
        </a>
      </header>
    </div>
  );
}

export default App;
