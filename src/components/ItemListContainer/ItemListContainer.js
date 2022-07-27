import './ItemListContainer.css'

function ItemListContainer(props){
    return (
        <div><h3>{props.greeting}</h3>{props.children}</div>
    )
}

export default ItemListContainer;