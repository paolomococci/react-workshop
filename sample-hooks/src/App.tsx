import logo from './logo.svg';
import './App.css';
import Solution from './solution';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <h3>Sample Hooks</h3>
        <hr/>
        <Solution/>
      </header>
    </div>
  );
}

export default App;
