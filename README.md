# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh







const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState('');
  const [stock, setStock] = useState('');
  const [categoria, setCategoria] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [productos, setProductos] = useState([]);
  const [modoEdicion, setModoEdicion] = useState(false);
  const [productoId, setProductoId] = useState(null);

  useEffect(() => {
    fetchProductos();
  }, []);

  const fetchProductos = () => {
    fetch('http://localhost:3000/products')
      .then(res => res.json())
      .then(data => {
        if (data.products) setProductos(data.products);
      })
      .catch(error => console.error("Error al obtener productos:", error));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: nombre,
      description: descripcion,
      price: precio,
      stock: stock,
      categoryId: categoria,
      imageUrl: imageUrl
    };

    if (modoEdicion) {
      fetch(`http://localhost:3000/products/${productoId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then(res => res.json())
        .then(data => {
          alert('Producto actualizado');
          limpiarFormulario();
          fetchProductos();
        })
        .catch(err => {
          console.error(err);
          alert('Error al actualizar');
        });
    } else {
      fetch('http://localhost:3000/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          alert('Producto creado exitosamente');
          limpiarFormulario();
          fetchProductos();
        })
        .catch((err) => {
          console.error(err);
          alert('Error al guardar');
        });
    }
  };

  const editarProducto = (producto) => {
    setNombre(producto.name);
    setDescripcion(producto.description);
    setPrecio(producto.price);
    setStock(producto.stock);
    setCategoria(producto.categoryId);
    setImageUrl(producto.imageUrl || '');
    setProductoId(producto.id);
    setModoEdicion(true);
  };

  const limpiarFormulario = () => {
    setNombre('');
    setDescripcion('');
    setPrecio('');
    setStock('');
    setCategoria('');
    setImageUrl('');
    setModoEdicion(false);
    setProductoId(null);
... (166 líneas restantes)
Contraer
productos.txt
9 KB
import axios from "axios";

