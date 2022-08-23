

import burger1 from "../../images/burger1.jpg"
import burger2 from "../../images/burger2.jpg"
import burger3 from "../../images/burger3.jpg"
import burger4 from "../../images/burger4.jpg"
let arrayProducts = [
    {
        id:1,
        title: "La cebollona",
        imageUrl: burger3,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga inventore, at nulla eos repudiandae del",
        stock: 12, 
        price: 100
    },
    {
        id:2 ,
        title: "DeliciaConQueso", 
        imageUrl: burger2,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga inventore, at nulla eos repudiandae deleniti alias culpaimus maiores, laborum facilis beatae! Cupiditate, a harum!",
        stock: 12, 
        price: 250
    },
    {
        id:3 ,
        title: "FaComoTa", 
        imageUrl: burger4,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga inventore, at nulla eos repudiandae deleniti alias s maiores, laborum facilis beatae! Cupiditate, a harum!",
        stock: 11, 
        price: 140
    },
    {
        id:4 ,
        title: "De Una", 
        imageUrl: burger1,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga inventore, at nulla eos repudiandae deleniti alias culpa fugit eaque atque aspernatur placeat ducimus maiores, laborum facilis beatae! Cupiditate, a harum!",
        stock: 25, 
        price: 412
    }
]

const getFetch = new Promise((resolve, reject)=>{
    let condition = true;
    if(condition){
        setTimeout(()=>{
            resolve(arrayProducts)
        }, 2000);
    }else{
        reject(console.log("Error en la promesa"))
    }
})

export const getProductById = (id) =>{
    return new Promise((resolve, reject)=>{
            resolve(arrayProducts.filter(prod => {
                if((prod.id == id)){
                    return prod
                }
            }))
    }) 
}

export const getProduct = () =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(arrayProducts.filter(prod => prod))
        }, 0)
    }) 
}

export default getFetch;