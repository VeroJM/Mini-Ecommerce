import { useEffect, useState } from "react";
import { obtenerProducts } from "./utils/API.js";

export const App = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const traerProductos = async () => {
      const res = await obtenerProducts();

      if (res.error) {
        setError(res.error);
      } else {
        setProducts(res.data);
      }

      setLoading(false);
    };

    traerProductos();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>MINI ECOMMERCE</h1>

      {loading && <p>Cargando productos...</p>}

      {error && <p>Error: {error}</p>}

      {!loading && products.length === 0 && <p>No hay productos</p>}

      {products.map(product => (
        <div 
          key={product.id} 
          style={{
            border: "1px solid #ccc",
            margin: "10px 0",
            padding: "10px",
            borderRadius: "8px"
          }}
        >
          <h2>{product.title}</h2>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
};