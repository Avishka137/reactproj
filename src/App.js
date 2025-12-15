import logo from './logo.svg';
import './App.css';
import PartOne from './components/PartOne';

function App() {
  return (
    <div className="App">
      <h1> This is a react project</h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          
          <PartOne/>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> 
      </header>
    </div>
  );
}

export default App;
