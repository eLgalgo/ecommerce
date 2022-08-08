import { useEffect, useState } from "react"
import {useParams} from 'react-router-dom'
import {getProductById } from '../Data/Data.js'
import ItemDetail from "../ItemDetail/ItemDetail"
import "./ItemDetailContainer.css"

export default function ItemDetailContainer(){
    const [product, setProduct] = useState(0)
    const {productId} = useParams();
    useEffect(()=>{
        getProductById(productId)
            .then(product => {
                setProduct(product)
            })
            .catch(error =>{
                console.log(error)
            })
    }, [productId])
    return(
        <>
        <ItemDetail {...product[0]}/>
        </>
    )
}