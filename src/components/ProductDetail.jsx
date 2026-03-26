import "../styles/ProductDetail.css";

export const ProductDetail = ({ product, setSelectedProduct }) => {

  if (!product) return null;

  return (
    <div className="product-detail-overlay">
      <div className="product-detail">

        <img src={product.thumbnail} alt={product.title} />

        <h2 className="product-title">{product.title}</h2>

        <h5 className="category-detail">Categoría: {product.category}</h5>

        <p>{product.description}</p>

        <p className="product-price">Precio: ${product.price}</p>

        <p className="product-discount">Descuento: {product.discountPercentage}%</p>

        <p className="rating-detail">Rating: ⭐ {product.rating}</p>

        <div className="product-detail-btn">
            <button onClick={() => setSelectedProduct(null)}>
            Cerrar
            </button>
        </div>

      </div>
    </div>
  );
};