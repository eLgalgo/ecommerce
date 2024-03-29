import { useState } from "react";


import "./ItemCount.css"

function ItemCount({ id, stock, initial, onAdd }){
    const [contador, setCount] = useState(initial);
    function eventMas(){
        if(contador < stock){
            setCount(contador + 1);
        }

    }
    function eventMenos(){
        setCount(contador - 1);
    }
    function btnAdd(){
        if(contador <= stock){
            onAdd(contador);
        }
    }
    return(
        <div className="itemCount container-fluid">
            <div className="contador row">
                <button onClick={contador != 0 ? eventMenos : null} className="btnCount col">-</button>
                <input type="number" className="col-6 inputNumber" value={contador}/>
                <button onClick={eventMas} type="button" className="col btnCount">+</button>
            </div>

        </div>
    )
}

export default ItemCount;