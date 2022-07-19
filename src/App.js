import logo from './logo.svg';
import obra from './obra.jpg';
import './App.css';

import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <img className='obraImg' src= {obra}/>
    </div>
  );
}

export default App;
