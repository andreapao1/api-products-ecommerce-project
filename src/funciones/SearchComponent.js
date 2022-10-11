/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from "react";
import Article from "../components/ComponenteArticle";
import { viewArticles } from "../funciones/funciones";


const SearchComponent = () => {
	// eslint-disable-next-line no-unused-vars
	const [ articles, setProducts ] = useState([]);
	const [ search, setSearch ] = useState("");

	useEffect(() => {
		viewArticles(setSearch);
	}, []);

	// filtrado
	const searcher = (e) => {
		setSearch(e.target.value);
		console.log(e.target.value);
	};

	let results = [];
	if(!search)
	{
		results = articles;
	} else {
		articles.filter( (dato) => 
			dato.product_name.toLowerCase().includes(search.toLocaleLowerCase())
		);
	}


	return (
		<div>
			<input value={search} onChange={searcher} type="text" placeholder="Buscar producto" className="form-control"></input>
		</div>
	);
};

export default SearchComponent;