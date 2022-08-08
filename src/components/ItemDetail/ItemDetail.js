import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount";

function ItemDetail({description, id, imageUrl, price, stock, title}){
    return (
        <>
        <h1>{title}</h1>
        <img className="imgItem" src={imageUrl}/>
        <p>{description}</p>
        <h2>Precio: {price}</h2>
        <p>Stock disponible: {stock}</p>
        <ItemCount id={id} stock={stock} initial={1} onAdd={(cantidad)=>{alert(`Se agregaron ${cantidad} items a su carrito`)}}/>
        </>
    )
}

export default ItemDetail;