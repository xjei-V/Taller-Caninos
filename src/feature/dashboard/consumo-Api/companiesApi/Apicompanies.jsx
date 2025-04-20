// listar

import axios from "axios"

const url = "http://localhost:3000/companies"

export const GetCompanies = async () =>{
    console.log(url)
    try {
        const response = await axios.get(url)
        return response.data
        
    } catch (error) {
        return {status: false, message : "No tienes las api negrito ", error}
        
    }
}
// eliminar

export const DeleteCompany = async (id) =>{
    const url = `http://localhost:3000/companies/${id}`
    try {
        
        const response = await axios.delete(url);
        return response.data
    } catch (error) {
        return {status: false, message : "No tienes las api negrito ", error}
        
    }
}
// editar


// crear

