import "./InputSearch.css"

export default function InputSearch(){
    return(
        <aside id="busqueda">
            <input type="text" placeholder="Buscar por nombre"/>
            <button id="botonFiltro"><span>Buscar</span></button>
        </aside>
    );
}