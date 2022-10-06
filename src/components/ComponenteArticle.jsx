// INICIO

import React, { useEffect } from "react";
import { useState } from "react";
import { viewArticles } from "../funciones/funciones";
import SearchComponent from "../funciones/SearchComponent";

const Article = () => {
    const [results, setArticles] = useState([]);


    useEffect(() => {
        viewArticles(setArticles)
    }, [])

    const cambiarStage = e => {
        setArticles(e.target.value)
        console.log(e.target.value)
    }
    

    
    return (
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
    )

}

export default Article;