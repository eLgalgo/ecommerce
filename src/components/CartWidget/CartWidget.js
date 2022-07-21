'use strict'
import logo from './iconoCart.svg';
import './CartWidget.css'

function CartWidget(){
    return(
        <a href='#' className='carritoImg'><img src= {logo}/></a>
    )
}

export default CartWidget;