
import Map from './Components/Map/Map'
import './App.css';
import DocCard from './Components/Card/Card';
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <Map/>
        <DocCard/>
    </div>
  );
}

export default App;
