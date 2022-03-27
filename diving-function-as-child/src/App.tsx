import './App.css';
import Name from './components/Name'

function App() {
  return (
    <div className="App">
      <Name>
        {(name: string) => <div>Hello, {name}!</div>}
      </Name>
    </div>
  );
}

export default App;
