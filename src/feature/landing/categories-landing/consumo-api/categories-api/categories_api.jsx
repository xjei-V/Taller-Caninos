import axios from "axios"

export const GetCategorie = async ()=>{

  const url = "http://localhost:3000/categories"

  try {
    const response = await axios.get(url)
    return response.data.categories
    
  } catch (error) {
    return {status: false, message : "No tienes las api negrito ", error}
    
  }


  

}
export const GetProductsByCategory = async (categoryId) => {
  
  const url = `http://localhost:3000/products/category/${categoryId}`;

  try {
    const response = await axios.get(url);
    return response.data.products || [];
  } catch (error) {
    console.error('Error al obtener productos por categoría:', error);
    return [];
  }
};

