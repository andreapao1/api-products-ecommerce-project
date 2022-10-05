// PERSONAJE

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { uniqueArticle } from "../funciones/funciones";

const Inicio = () => {
    const [articulo, setArticles] = useState(null);
    const params = useParams()
    useEffect(() => {
        uniqueArticle(params._id, setArticles)
    }, [])

    return (
        <body className="body">
            <>
                {articulo == null ? ("no hay articulos") :
                    (
                        <div>
                            <div className="articlesect">
                                <div>
                                    <h1 className="title-product">{articulo.product_name}</h1>
                                    <img className="img-product" src={articulo.image} alt="" />
                                </div>
                                <div className="section-articles">
                                    <p className="desc-product">Descripción: {articulo.description}</p>
                                    <div className="star-section">
                                        <i class="star fa-solid fa-star"></i>
                                        <i class="star fa-solid fa-star"></i>
                                        <i class="star fa-solid fa-star"></i>
                                        <i class="star fa-solid fa-star"></i>
                                        <i class="star fa-solid fa-star"></i>
                                    </div>
                                    <hr />

                                    <button className="btn-car"><i class="fa-solid fa-cart-arrow-down"></i> Agregar al carrito</button>
                                    <div className="sect-datos">
                                        <h4 className="brand-product">Precio: ${articulo.price}</h4>
                                        <h2 className="brand-product">Marca: {articulo.brand}</h2>
                                        <h4 className="brand-product">Categoría: {articulo.category}</h4>
                                        <button className="brand-product btn-buy"><i class="fa-solid fa-truck"></i> Comprar</button>
                                        <p className="date-product">La oferta vence el: {articulo.updatedAt}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
            </>
        </body>
    )
}

export default Inicio;