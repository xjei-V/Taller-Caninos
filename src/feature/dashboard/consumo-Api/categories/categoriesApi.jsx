// ver

import axios from "axios"

export const GetCategories = async () =>{

    const url = "http://localhost:3000/categories"

    try {
        const response = await axios.get(url)
        return response.data.categories
        
    } catch (error) {
        return {status: false, message : "No tienes las api negrito ", error}
        
    }

}

// eliminar

 export const DeleteCategory = async (id) =>{
    const url = `http://localhost:3000/categories/${id}`
    try {
        
        const response = await axios.delete(url);
        return response.data
    } catch (error) {
        return {status: false, message : "No tienes las api negrito ", error}
        
    }
}
// editar

export const UpdateCategory = async (id, category) =>{

    const url = `http://localhost:3000/categories/${id}`

    try {
        const response = await axios.put(url, category)
        return response.data
        
    } catch (error) {
        return {status: false, message : "No tienes las api negrito ", error}
        
    }

}
// crear

export const PostCategory = async (category) =>{

    const url = "http://localhost:3000/categories"

    try {
        const response = await axios.post(url, category)
        return response.data
        
    } catch (error) {
        return {status: false, message : "No tienes las api negrito ", error}
        
    }

}