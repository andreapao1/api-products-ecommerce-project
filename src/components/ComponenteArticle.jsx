// INICIO


import React, { useEffect } from "react";
import { useState } from "react";
import { viewArticles } from "../funciones/funciones";
import NavComponent from "../components/NavComponent";

const Article = () => {
	const [results, setArticles] = useState([]);

	function SearchFunction(event) {
		console.log(event);
		if(event.target.value.length > 0) {
			// console.log(event.target.value);
			// console.log(results)
			const filterResult = results.filter((item) => {
				// console.log(item.brand)
				return item?.product_name.includes(event.target.value.toLowerCase());
			});
			setArticles(filterResult);
		} else {
			viewArticles(setArticles);
		}
   
	}

	// La primera vez
	// Cuando se monta el componente ComponenteArticle va ejecturar el useEffect
	useEffect(() => {
		viewArticles(setArticles);
	}, []);
	// //Cuando se actualiza un prop o un state 
	// useEffect(() => {
	//     viewArticles(setArticles)
	// }, [results])

    

    
	return (
		<>
			<NavComponent searchFunction={SearchFunction}/>
			<div className="row">
				{results == null ? ("no hay articulos") :
					results.map(articulo => (
						<div key={articulo._id} className="col product-things">
							<div className="card">
								<img className="img-oneproduct" src={articulo.image} alt="" />
								<h3>{articulo.product_name}</h3>
								<h4 className="price-sect">${articulo.price}</h4>
                          
								<a className="button" href={`/articulo/${articulo._id}`}><button>Mostrar producto</button></a>
							</div>
						</div>
					))}
			</div>
		</>
	);

};

export default Article;

// import React, { useEffect } from "react";
// import { useState } from "react";
// import { viewArticles } from "../funciones/funciones";
// // import SearchComponent from "../funciones/SearchComponent";
// import NavComponent from "../components/NavComponent";

// const Article = () => {
// 	const [results, setArticles] = useState([]);

	
// 	function searchFunction(event) {
// 		console.log(event);
// 		if(event.target.value.length > 0) {
// 			// console.log(event.target.value);
// 			// console.log(results)
// 			// eslint-disable-next-line no-unused-vars
// 			const filterResult = results.filter((item,index) => {
// 				// console.log(item.brand)
// 				return item?.product_name.includes(event.target.value.toLowerCase());
// 			});
// 			setArticles(filterResult);
// 		} else {
// 			viewArticles(setArticles);
// 		}
   
// 	}

// 	// La primera vez
// 	// Cuando se monta el componente ComponenteArticle va ejecturar el useEffect
// 	useEffect(() => {
// 		viewArticles(setArticles);
// 	}, []);
// 	// //Cuando se actualiza un prop o un state 
// 	// useEffect(() => {
// 	//     viewArticles(setArticles)
// 	// }, [results])

// 	// const cambiarStage = e => {
// 	// 	setArticles(e.target.value);
// 	// 	console.log(e.target.value);
// 	// };

    

    
// 	return (
// 		<>
// 			<NavComponent searchFunction={searchFunction}/>
// 			<div className="row">
// 				{results == null ? ("no hay articulos") :
// 					results.map(articulo => (
// 						<div key={articulo._id} className="col product-things">
// 							<div className="card">
// 								<img className="img-oneproduct" src={articulo.image} alt="" />
// 								<h3>{articulo.product_name}</h3>
// 								<h4 className="price-sect">${articulo.price}</h4>
                          
// 								<a className="button" href={`/articulo/${articulo._id}`}><button>Mostrar producto</button></a>
// 							</div>
// 						</div>
// 					))}
// 			</div>
// 		</>
// 	);

// };

// export default Article;