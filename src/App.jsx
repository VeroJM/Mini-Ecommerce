import "./styles/GlobalStyles.css"

import { useEffect, useState } from "react";
import { obtenerProducts } from "./utils/API.js";
import { ProductCard } from "./components/ProductCard.jsx";
import { CategoryFilter } from "./components/CategoryFilter.jsx"; 
import { SearchBar } from "./components/SearchBar.jsx";
import { DiscountFilter } from "./components/DiscountFilter.jsx";
import { OrderBy } from "./components/OrderBy.jsx";
import { ProductDetail } from "./components/ProductDetail.jsx";

export const App = () => {
  // estados 
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");
  const [onlyDiscount, setOnlyDiscount] = useState(false);
  const [order, setOrder] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  
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

  let filteredProducts = [...products]; // protejer el array

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

  // filtro por descuento
  if (onlyDiscount) {
    filteredProducts = filteredProducts.filter(function(product) {
      return product.discountPercentage > 10;
    });
  }

  // ordenar por rating
  if (order === "asc") {
    filteredProducts.sort(function(a, b) {
      return a.rating - b.rating;
    });
  }

  if (order === "desc") {
    filteredProducts.sort(function(a, b) {
      return b.rating - a.rating;
    });
  }

  return (
    <div className="dad-container">

      <div className="sidebar">
        <h2>Filtros</h2>

        <SearchBar search={search} setSearch={setSearch}/>

        <CategoryFilter products={products} setCategory={setCategory}/>

        <OrderBy order={order} setOrder={setOrder}/>

        <DiscountFilter onlyDiscount={onlyDiscount} setOnlyDiscount={setOnlyDiscount}/>
      </div>

      <div className="products-section">
        <h1>Mini Ecommerce</h1>

        {loading && <p>Cargando productos...</p>}
        
        {error && <p>Error: {error}</p>}

        <div className="products-container">
          {filteredProducts.length === 0 ? (
            <p>No hay resultados</p>
          ) : (
            filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} setSelectedProduct={setSelectedProduct}/>
            ))
          )}
        </div>
      </div>

      <ProductDetail product={selectedProduct} setSelectedProduct={setSelectedProduct}/>
      
    </div>
  );
};