import './App.css';
import Home from './components/Home/Home';
import StarWars from './components/StarWars/StarWars';
import { Container } from "@mui/material";

function App() {
  return (
    <Container>
    <div className="App">
      <header className="App-header">
        <Home />
        <StarWars />
      </header>
    </div>
    </Container>

  );
}

export default App;
