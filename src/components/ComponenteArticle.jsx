// INICIO

import React,{useEffect} from "react";
import { useState } from "react";
import { viewArticles } from "../funciones/funciones";


const Article = () => {
    const [articles, setArticles] = useState(null)

    useEffect(()=>{
        viewArticles(setArticles)
    },[])
     
    return (
        <>
        {articles == null ? ("no hay articulos") : 
        articles.map(articulo => (
            <div key={articulo._id}>
                <a href={`/articulo/${articulo._id}`}>{articulo.brand}</a>
                <img src={articulo.image} alt="#" />
                <h3>{articulo.product_name}</h3>
                <h4>{articulo.description}</h4>
                <p>${articulo.price}</p>
            </div>
        ))}
        
        </>
    )
}

export default Article;