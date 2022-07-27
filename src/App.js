import obra from './obra.jpg';
import './App.css';

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="¡Agregà items a tu carrito!">
        <ItemCount stock={5} initial={1} onAdd={(cantidad)=>{alert(`Se agregaron ${cantidad} items a su carrito`)}}/>
      </ItemListContainer>
      <img className='obraImg' src= {obra}/>
    </div>
  );
}

export default App;
