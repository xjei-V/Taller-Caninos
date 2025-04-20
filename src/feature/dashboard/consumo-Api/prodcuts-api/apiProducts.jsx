import axios from 'axios';

const baseUrl = 'http://localhost:3000/products';

// POST - Crear producto
export const PostProducto = async (data) => {
  try {
    const response = await axios.post(baseUrl, data);
    return response.data;
  } catch (error) {
    console.error("Error al crear producto:", error);
    return { status: false, mensaje: "Error al crear producto", error };
  }
};

// PUT - Actualizar producto
export const UpdateProducto = async (id, data) => {
  try {
    const response = await axios.put(`${baseUrl}/${id}`, data);
    return response.data;
  } catch (error) {
    console.error("Error al actualizar producto:", error);
    return { status: false, mensaje: "Error al actualizar producto", error };
  }
};

// DELETE - Eliminar producto
export const DeleteProducto = async (id) => {
  try {
    const response = await axios.delete(`${baseUrl}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error al eliminar producto:", error);
    return { status: false, mensaje: "Error al eliminar producto", error };
  }
};
