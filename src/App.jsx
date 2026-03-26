import "./styles/GlobalStyles.css"

import { useEffect, useState } from "react";
import { obtenerProducts } from "./utils/API.js";
import { ProductCard } from "./components/ProductCard.jsx";
import { CategoryFilter } from "./components/CategoryFilter.jsx"; 
import { SearchBar } from "./components/SearchBar.jsx";

export const App = () => {
  // estados 
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");

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

  let filteredProducts = products;

  // filtro por categoría
  if (category !== "") {
    filteredProducts = filteredProducts.filter(function(product) {
      return product.category === category;
    });
  }

  // filtro por busqueda
  if (search !== "") {
    filteredProducts = filteredProducts.filter(function(product) {
      return product.title.toLowerCase().includes(search.toLowerCase());
    });
  }

  return (
    <div>
      <h1>MINI ECOMMERCE</h1>

      {loading && <p>Cargando productos...</p>}
      {error && <p>Error: {error}</p>}

      <CategoryFilter products={products} setCategory={setCategory}/>
      <SearchBar search={search} setSearch={setSearch}/>

      <div className="products-container">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};