Primero instalé MySQL Workbench para poder manejar la base de datos de forma visual.
Luego fui al archivo .env de la API y cambié los datos que vienen por defecto por los míos (usuario, contraseña, nombre de la base de datos, etc.).
Verifiqué que la conexión a la base de datos desde la API estuviera funcionando correctamente.
Después creé un nuevo proyecto en React para el frontend.
Instalé algunas librerías como Bootstrap y Tailwind para mejorar el diseño de la interfaz.
Configuré el JWT para el login, y una vez iniciado sesión, el token se guarda en el localStorage.
Implementé rutas protegidas, como el dashboard o el admin, para que solo se pueda acceder si se está logueado.
En el frontend, consulté los métodos que ya tenía el backend para poder consumir las APIs y así insertar registros en las diferentes entidades.
Para registrar datos desde el frontend, usé el método POST.
Para ver los datos, usé el método GET.
Para editar, usé el método PUT.
Y para eliminar, usé el método DELETE.
Cuando se cierra sesión o se quiere eliminar el token del localStorage, usé removeItem.
Para mostrar los productos y las categorías, consumí las APIs con el método GET y luego hice un mapeo para mostrarlos en pantalla.
También usé async/await para manejar las respuestas de las APIs de forma más ordenada.
Y por último, utilicé try/catch para capturar errores y así verificar si algo fallaba en las peticiones.

