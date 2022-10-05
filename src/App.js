import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./components/ComponenteArticle";
import Article from "./components/ComponenteFuncion";
import "./index.css";
// import React, {useEffect} from "react";


function App() {
    return (
        <div className="contenedor">
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