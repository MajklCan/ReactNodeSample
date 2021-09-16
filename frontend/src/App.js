import logo from './logo.svg';
import './App.css';
import { Items } from './components/Items';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <h4>Moje React aplikace</h4>

        <ol>
          <li>Položka</li>
          <li>Položka</li>
          <li>Položka</li>
        </ol>
        
        <Items />

      </header>
    </div>
  );
}

export default App;
