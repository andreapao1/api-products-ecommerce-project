// INICIO

import React, { useEffect } from "react";
import { useState } from "react";
import { viewArticles } from "../funciones/funciones";

const Article = () => {
    const [articles, setArticles] = useState(null)

    useEffect(() => {
        viewArticles(setArticles)
    }, [])

    return (
        <div className="row">
            {articles == null ? ("no hay articulos") :
                articles.map(articulo => (
                    <div key={articulo._id} className="col">
                        <div className="card">
                        <img src={articulo.image} alt="" />
                        <h3>{articulo.product_name}</h3>
                        <p>${articulo.price}</p>
                        <a className="button" href={`/articulo/${articulo._id}`}>Mostrar producto</a>
                        </div>
                    </div>
                ))}
        </div>
    )
}

export default Article;