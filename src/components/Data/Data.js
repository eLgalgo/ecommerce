let arrayProducts = [
    {
        id:1,
        title: "Papas",
        imageUrl:"http://assets.stickpng.com/images/580b57fcd9996e24bc43c1a7.png",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga inventore, at nulla eos repudiandae del",
        stock: 124, 
        price: 100
    },
    {
        id:2 ,
        title: "Manzanas", 
        imageUrl:"http://assets.stickpng.com/images/580b57fcd9996e24bc43c1a7.png",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga inventore, at nulla eos repudiandae deleniti alias culpaimus maiores, laborum facilis beatae! Cupiditate, a harum!",
        stock: 120, 
        price: 250
    },
    {
        id:3 ,
        title: "Lapiz", 
        imageUrl:"http://assets.stickpng.com/images/580b57fcd9996e24bc43c1a7.png",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga inventore, at nulla eos repudiandae deleniti alias s maiores, laborum facilis beatae! Cupiditate, a harum!",
        stock: 11, 
        price: 140
    },
    {
        id:4 ,
        title: "Peras", 
        imageUrl:"http://assets.stickpng.com/images/580b57fcd9996e24bc43c1a7.png",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga inventore, at nulla eos repudiandae deleniti alias culpa fugit eaque atque aspernatur placeat ducimus maiores, laborum facilis beatae! Cupiditate, a harum!",
        stock: 25, 
        price: 412
    },
    {
        id:5 ,
        title: "Peras", 
        imageUrl:"http://assets.stickpng.com/images/580b57fcd9996e24bc43c1a7.png",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga inventore, at nulla eos repudiandae deleniti alias culpa fugit eaque atque aspernatur placeat ducimus maiores, laborum facilis beatae! Cupiditate, a harum!",
        stock: 30, 
        price: 412
    },
    {
        id:6 ,
        title: "Peras", 
        imageUrl:"http://assets.stickpng.com/images/580b57fcd9996e24bc43c1a7.png",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga inventore, at nulla eos repudiandae deleniti alias culpa fugit eaque atque aspernatur placeat ducimus maiores, laborum facilis beatae! Cupiditate, a harum!",
        stock: 40,
        price: 412
    },
    {
        id:7 ,
        title: "Peras", 
        imageUrl:"http://assets.stickpng.com/images/580b57fcd9996e24bc43c1a7.png",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga inventore, at nulla eos repudiandae deleniti alias culpa fugit eaque atque aspernatur placeat ducimus maiores, laborum facilis beatae! Cupiditate, a harum!",
        stock: 35,
        price: 412
    },
    {
        id:8 ,
        title: "Peras", 
        imageUrl:"http://assets.stickpng.com/images/580b57fcd9996e24bc43c1a7.png", 
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga inventore, at nulla eos repudiandae deleniti alias culpa fugit eaque atque aspernatur placeat ducimus maiores, laborum facilis beatae! Cupiditate, a harum!",
        stock: 10,
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