import logo from './logo.svg';
import './App.css';
import TileList from './Components/tileList';

function App() {
  return (
    <div className="App">
      <h2>Tile Flipping Game</h2>
      <TileList className="wrapper" />
    </div>
  );
}

export default App;
