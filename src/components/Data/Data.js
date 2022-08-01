let arrayProducts = [
    {
        id:1,
        title: "Papas",
        imageUrl:"/static/media/github.64fa1d1c4801d931c3717be71f6c020e.svg",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga inventore, at nulla eos repudiandae del",
        stock: 124, 
        price: 100
    },
    {
        id:2 ,
        title: "Manzanas", 
        imageUrl:"/static/media/github.64fa1d1c4801d931c3717be71f6c020e.svg",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga inventore, at nulla eos repudiandae deleniti alias culpaimus maiores, laborum facilis beatae! Cupiditate, a harum!",
        stock: 120, 
        price: 250
    },
    {
        id:3 ,
        title: "Lapiz", 
        imageUrl:"/static/media/github.64fa1d1c4801d931c3717be71f6c020e.svg",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga inventore, at nulla eos repudiandae deleniti alias s maiores, laborum facilis beatae! Cupiditate, a harum!",
        stock: 11, 
        price: 140
    },
    {
        id:4 ,
        title: "Peras", 
        imageUrl:"/static/media/github.64fa1d1c4801d931c3717be71f6c020e.svg",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga inventore, at nulla eos repudiandae deleniti alias culpa fugit eaque atque aspernatur placeat ducimus maiores, laborum facilis beatae! Cupiditate, a harum!",
        stock: 25, 
        price: 412
    },
    {
        id:5 ,
        title: "Peras", 
        imageUrl:"/static/media/github.64fa1d1c4801d931c3717be71f6c020e.svg",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga inventore, at nulla eos repudiandae deleniti alias culpa fugit eaque atque aspernatur placeat ducimus maiores, laborum facilis beatae! Cupiditate, a harum!",
        stock: 30, 
        price: 412
    },
    {
        id:6 ,
        title: "Peras", 
        imageUrl:"/static/media/github.64fa1d1c4801d931c3717be71f6c020e.svg",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga inventore, at nulla eos repudiandae deleniti alias culpa fugit eaque atque aspernatur placeat ducimus maiores, laborum facilis beatae! Cupiditate, a harum!",
        stock: 40,
        price: 412
    },
    {
        id:7 ,
        title: "Peras", 
        imageUrl:"/static/media/github.64fa1d1c4801d931c3717be71f6c020e.svg",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga inventore, at nulla eos repudiandae deleniti alias culpa fugit eaque atque aspernatur placeat ducimus maiores, laborum facilis beatae! Cupiditate, a harum!",
        stock: 35,
        price: 412
    },
    {
        id:8 ,
        title: "Peras", 
        imageUrl:"/static/media/github.64fa1d1c4801d931c3717be71f6c020e.svg", 
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

export default getFetch;