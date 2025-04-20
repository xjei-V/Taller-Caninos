import { createContext, useState } from "react"; //importamos un contexto para compartir datos en este caso el token

export const AuthContext = createContext(); //creamos un contexto para compartir datos

export const AuthProvider = ({ children }) => {     // el Authprovider es un componente que contiene funciones y datos para compartir y se usa children para que se puedan pasar datos y funciones a los hijos

  const [token, setToken] = useState(localStorage.getItem("token"));    // Creamos un estado llamado `token`. Inicialmente intentamos obtener un token guardado en el localStorage (por si el usuario ya había iniciado sesión antes).
  
  


  const login = (newToken) => {  // esta funcion se va a ejecutar cuando se ingrese al login . Newtoken es el token que nos dio en el backend
    localStorage.setItem("token", newToken); //localStorage.setItem es para guardar el token en el localstorage

    setToken(newToken); // settoken actualiza o reemplaza el token 
  };

  const logout = () => {  // essta funcion se ejecuta cuando se cierra la sesión
    localStorage.removeItem("token"); //localStorage.removeItem es para borrar el token del localstorage

    setToken(null); // setToken quita el token con el null al ejecutar el logout
  };

 
  return (
    <AuthContext.Provider value={{ token, login, logout }}> {/* children es el componente que se va a renderizar dentro de este AuthProvider */}
      {children}
    </AuthContext.Provider>
  );
};
