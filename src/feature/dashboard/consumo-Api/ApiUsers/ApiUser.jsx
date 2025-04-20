import axios from "axios"

// listar
export const GetUsers = async () =>{

    const url = "http://localhost:3000/users"

    try {
        const response = await axios.get(url)
        return response.data
        
    } catch (error) {
        return {status: false, message : "No tienes las api negrito ", error}
        
    }

}
// eliminar


// editar

// crear

export const PostUser = async (user) =>{

    const url = "http://localhost:3000/users"

    try {
        const response = await axios.post(url, user)
        return response.data
        
    } catch (error) {
        return {status: false, message : "No tienes las api negrito ", error}
        
    }

}

