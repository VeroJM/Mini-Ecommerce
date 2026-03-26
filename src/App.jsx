import { useEffect, useState } from "react";
import { obtenerProducts } from "./utils/API.js";
import { ProductCard } from "./components/ProductCard.jsx";

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
    <div>
      <h1>MINI ECOMMERCE</h1>

      {loading && <p>Cargando productos...</p>}
      {error && <p>Error: {error}</p>}

      <div>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};