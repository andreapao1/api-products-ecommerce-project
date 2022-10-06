import axios from "axios";


const viewArticles = async (state) => {
    const peticion = await axios.get("https://ecomerce-master.herokuapp.com/api/v1/item");
    state(peticion.data);
    console.log(peticion);
}

const uniqueArticle = async (id, state) => {
    const peticion = await axios.get(`https://ecomerce-master.herokuapp.com/api/v1/item/${id}`);
    state(peticion.data);
    console.log(peticion);
}


export {
    viewArticles,
    uniqueArticle
}