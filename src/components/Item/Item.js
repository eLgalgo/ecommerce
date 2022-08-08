
import { Link } from "react-router-dom";

import "./Item.css"

export function Item(props){
    return(
        <>
            <div>
                <h2 className="titleItem">{props.title}</h2>
                <img src={props.imageUrl}/>
                <p>{props.description}</p>
                <h3>Precio: {props.price}</h3>
                
                <Link to={`/detail/${props.id}`}>
                    <button className="btnAdd col">Ver detalles</button>
                </Link>
                {/* <ItemCount id={props.id} stock={props.stock} initial={1} onAdd={(cantidad)=>{alert(`Se agregaron ${cantidad} items a su carrito`)}}/> */}
            </div>
        </>
    );
}