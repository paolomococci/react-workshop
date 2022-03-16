import logo from './logo.svg';
import './App.css';
import GeoLocateContainer from './components/GeoLocateContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <GeoLocateContainer />
      </header>
    </div>
  );
}

export default App;
