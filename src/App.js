import obra from './obra.jpg';
import './App.css';

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="¡Agregà items a tu carrito!"/>
      <img className='obraImg' src= {obra}/>
    </div>
  );
}

export default App;
