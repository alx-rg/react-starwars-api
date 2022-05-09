import './App.css';
import Header from './components/Header/Header';
import StarWars from './components/StarWars/StarWars';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <StarWars />
      </header>
    </div>
  );
}

export default App;
