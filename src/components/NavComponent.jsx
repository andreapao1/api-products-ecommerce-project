import React from "react";

// eslint-disable-next-line react/prop-types
function NavComponent({ searchFunction }) {
	return (
		<nav>
			<img src="https://i.pinimg.com/564x/fa/d7/e4/fad7e46ef884c8152422f173a29b9ae7.jpg" alt=""/>
			<ul>
				<li><a>Sucursales</a></li>
				<li><input name='search' onChange={searchFunction} type="text" placeholder="Buscar producto" className="form-control"/></li>
				{/* <button className="btn-buscar">Buscar</button> */}
				<li><a>Devoluciones - Quejas - Pedidos</a></li>
				<li><a>Iniciar Sesión / Registrarse</a></li>
			</ul>
		</nav>
	);
}

export default NavComponent;

// import React from "react";

// function NavComponent(searchFunction) {
// 	return (
// 		<nav>
// 			<img src="https://i.pinimg.com/564x/fa/d7/e4/fad7e46ef884c8152422f173a29b9ae7.jpg" alt=""/>
// 			<ul>
// 				<li><a>Sucursales</a></li>
// 				<li><input name='search' onChange={searchFunction} type="text" placeholder="Buscar producto" className="form-control"/></li>
// 				<button className="btn-buscar">Buscar</button>
// 				<li><a>Devoluciones - Quejas - Pedidos</a></li>
// 				<li><a>Iniciar Sesión / Registrarse</a></li>
// 			</ul>
// 		</nav>
// 	);
// }

// export default NavComponent;