import logo from './logo.png';
import './NavBar.css';

function NavBar(){
    return (
        <header>
            <nav className='menu'>
                <a href='#'><img className= "logo" src = {logo}></img></a>
                <ul  className= "lista">
                    <li><a href='#'>Articulos</a></li>
                    <li><a href='#'>Sobre Nosotros</a></li>
                    <li><a href='#'>Galeria</a></li>
                    <li><a href='#'>Contacto</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar;