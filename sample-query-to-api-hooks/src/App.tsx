import logo from './logo.svg';
import './App.css';
import Topics from './Topics';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <h2>Sample Query to API thanks to the Hooks reformulation</h2>
      </header>
      <article>
        <section>
          <Topics/>
        </section>
      </article>
    </div>
  );
}

export default App;
