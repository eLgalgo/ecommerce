import ItemCount from "../ItemCount/ItemCount";

export function Item(props){
    return(
        <>
            <div>
                <h2>{props.title}</h2>
                <img src={props.imageUrl}/>
                <p>{props.description}</p>
                <h3>Precio: {props.price}</h3>
                <ItemCount stock={5} initial={1} onAdd={(cantidad)=>{alert(`Se agregaron ${cantidad} items a su carrito`)}}/>
                <h4>Stock disponible: {props.stock}</h4>
            </div>
        </>
    );
}