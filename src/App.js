import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./components/ComponenteArticle";
import Article from "./components/ComponenteFuncion";
import NavComponent from "./components/NavComponent";
import SearchComponent from "./funciones/SearchComponent";
import "./index.css";
// import React, {useEffect} from "react";


function App() {

    function SearchFunction(event) {
        console.log(event);
    }
    return (
        <div className="contenedor">
            <NavComponent searchFunction={SearchFunction}/>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Inicio></Inicio>}></Route>
                    <Route path='/articulo/:_id' element={<Article></Article>}></Route>
                </Routes>
            </BrowserRouter>
        </div> 
    ); 
}

export default App;