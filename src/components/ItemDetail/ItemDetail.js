import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CartContext } from "../../Context/CartContext";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ data }) => {
	const [cartItems, setCartItems] = useContext(CartContext);

	//Función para sumar el objeto al array, en caso de estar repetido le suma +1 a la cantidad.
	const handleAgregar = () => {
		
		const repetido = cartItems.find((rep) => rep.id === data.id);
		if (repetido) {
			setCartItems(
				cartItems.map((rep) =>
					rep.id === data.id
						? { ...repetido, cantidad: repetido.cantidad + 1 }
						: rep
				)
			);
			toastyAgregar();
		} else {
			setCartItems([...cartItems, { ...data, cantidad: 1 }]);
			toastyAgregar();
		}
	};

	//Toasty agregar
	const toastyAgregar = () => {
		toast.success("👌 ¡Producto agregado!", {
			position: "bottom-right",
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
	};

	return (
		<Card className="cardDetailContainer">
			<div className="cardDetailBody">
				<h1 className="cardDetailTitle">{data.nombre}</h1>
				<img className="imgDetailContainer" src={data.linkimage}/>
				<p>{data.description}</p>
				<h2 className="cardDetailPrice">Precio: {data.price}</h2>
				<p>Stock disponible: {data.stock}</p>
			</div>
        	<ItemCount id={data.id} stock={data.stock} initial={1} onAdd={(cantidad)=>{alert(`Se agregaron ${cantidad} items a su carrito`)}}/>
			<div>
				<Button
					className="cardAgregarCarrito"
					onClick={() => setCartItems(handleAgregar)}
				>
					Agregar al carrito
				</Button>
				<ToastContainer />
				<Link
					to="/carrito"
					style={{ textDecoration: "none", width: "fit-content" }}
				>
					{" "}
					<Button className="goCart">Finalizar compra</Button>{" "}
				</Link>
				<Link to="/" style={{ textDecoration: "none", width: "fit-content" }}>
					{" "}
					<Button className="backDetail">Volver a productos</Button>{" "}
				</Link>
			</div>
		</Card>
	);
};

export default ItemDetail;
