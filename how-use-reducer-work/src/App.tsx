import logo from './logo.svg';
import './App.css';
import Notes from './Notes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <h2>
          How use reducer work
        </h2>
        <article>
          <section>
            <Notes id={0}/>
          </section>
        </article>
      </header>
    </div>
  );
}

export default App;
