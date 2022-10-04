// PERSONAJE

import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { uniqueArticle } from "../funciones/funciones";

const Inicio = () => {
    const [articulo, setArticles] = useState(null);
    const params = useParams()
    useEffect(() => {
        uniqueArticle(params._id, setArticles)
    },[])

    return (
        <>
        {articulo == null ? ("no hay articulos") : 
        (
            <div>
                <h2>Articulo con el id {params._id}</h2>
                <p>Con el nombre {articulo.brand}</p>
                <img src={articulo.image} alt="" />
            </div>
        )}
        </>
    )
}

export default Inicio;