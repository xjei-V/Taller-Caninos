//listar

import axios from "axios"

export const GetRoles = async () =>{

    const url = "http://localhost:3000/roles"

    try {
        const response = await axios.get(url)
        return response.data
        
    } catch (error) {
        return {status: false, message : "No tienes las api negrito ", error}
        
    }

}

