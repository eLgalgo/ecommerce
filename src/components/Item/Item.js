
import { Link } from "react-router-dom";

import "./Item.css"

export function Item(props){
    return(
        <>
            <div className="containerItem">
                <h2 className="titleItem">{props.title}</h2>
                <div className="containerImg">
                    <img className="img-fluid" src={props.imageUrl}/>
                </div>
                <p>{props.description}</p>
                <h3 className="priceItem">{props.price} $</h3>
                
                <Link to={`/detail/${props.id}`}>
                    <button className="btnAdd col">Ver detalles</button>
                </Link>
                {/* <ItemCount id={props.id} stock={props.stock} initial={1} onAdd={(cantidad)=>{alert(`Se agregaron ${cantidad} items a su carrito`)}}/> */}
            </div>
        </>
    );
}