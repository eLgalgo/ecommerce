'use strict'
import logo from './iconoCart.png';
import './CartWidget.css'

function CartWidget(){
    return(
        <a href='#' className='carritoImg'><img src= {logo}/></a>
    )
}

export default CartWidget;