import InputSearch from "../InputSearch/InputSearch";
import { Item } from "../Item/Item";
import "./ItemList.css"

function ItemList({items}){
    return(
        <>
            <InputSearch/>
            <ul className="listaItems">
                {
                    items.map(product => <li className="item"><Item key={product.id} id={product.id} title={product.title} imageUrl={product.imageUrl} description={product.description} price={product.price} stock={product.stock}/></li>)
                }
            </ul>
        </>
    )
}

export default ItemList;