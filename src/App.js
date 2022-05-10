import './App.css';
import Home from './components/Home/Home';
import StarWars from './components/StarWars/StarWars';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home />
        <StarWars />
      </header>
    </div>
  );
}

export default App;
