import axios from "axios"

// ver el listado

export const GetProducts = async () =>{

    const url = 'http://localhost:3000/products'
    try {
        const response = await axios.get(url)
        return response.data.products
        
    } catch (error) {
        return {status: false, message : "No tienes las api negrito ", error}
        
    }
}

// ver detalle