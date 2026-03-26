import "../styles/ProductCard.css";

export const ProductCard = ({ product }) => {
  const discountedPrice = (
    product.price - (product.price * product.discountPercentage) / 100
  ).toFixed(2); 

  return (
    <div className="product-card">
      <img src={product.thumbnail} alt={product.title} />

      <h2 className="product-title">{product.title}</h2>

      <p className="product-price">Precio original: ${product.price}</p>

      <p className="product-discount">Descuento: {product.discountPercentage}%</p>

      <p className="product-final">Precio final: ${discountedPrice}</p>

      <p className="product-rating">Rating: ⭐ {product.rating}</p>
    </div>
  );
};