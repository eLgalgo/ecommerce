import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css'
import getFetch from "../Data/Data";
import gifLoading from "../../images/loading.gif"
import { useEffect, useState } from "react";

function ItemListContainer(props){
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        getFetch
        .then((resp)=>setData(resp))
        .catch(err=>console.log(err))
        .finally(()=> setLoading(false))
    }, [])
    
    return (
        <>
        <div>
            {loading ? <h2><img src={gifLoading}></img></h2>: <ItemList items={data} />}
        </div>
        </>
    )
}

export default ItemListContainer;