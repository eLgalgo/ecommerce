'use strict'
import logo from './logo.svg';
import img1 from '../../images/lechuga.png';
import img2 from '../../images/tomate.png';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from "react-router-dom";

function NavBar(){
    return (
        <header>
            <nav className='menu'>
                <Link to={`/`}>
                    <a href='#'><img className= "logo" src = {logo}></img></a>
                </Link>
                <ul  className= "lista">
                    <li className='opcionNav'>
                        <a href='#'>Burgers</a> 
                        <img className='imgNav' src={img1}/>
                    </li>
                    <li className='opcionNav'>
                        <a href='#'>Nosotros</a>
                        <img className='imgNav' src={img2}/>
                    </li>
                    <li className='opcionNav'>
                        <a href='#'>Contacto</a>
                        <img className='imgNav' src={img1}/>
                    </li>
                    <li className='liCart'><CartWidget></CartWidget></li>
                </ul>
            </nav>
        </header>
    )
}
export default NavBar;