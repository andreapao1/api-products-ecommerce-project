// import React, {useState} from 'react';
/* eslint-disable react/react-in-jsx-scope */
import { HashRouter , Routes, Route } from "react-router-dom";
import Inicio from "./components/ComponenteArticle";
import Article from "./components/ComponenteFuncion";
// eslint-disable-next-line no-unused-vars
import SearchComponent from "./funciones/SearchComponent";
// import NavComponent from "./components/NavComponent";
import "./index.css";
// import React, {useEffect} from "react";


function App() {
	return (
		<div className="contenedor">
			{/* <NavComponent searchFunction={"searchFunction"}/> */}
			<HashRouter >
				<Routes>
					<Route path='/' element={<Inicio></Inicio>}></Route>
					<Route path='/articulo/:_id' element={<Article></Article>}></Route>
				</Routes>
			</HashRouter >
		</div> 
	); 
}

export default App;