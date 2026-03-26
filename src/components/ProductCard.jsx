import "../styles/ProductCard.css";

export const ProductCard = ({ product }) => {
  const fullStars = Math.floor(product.rating);
  const hasHalfStar = product.rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

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

      <div className="product-rating">
        {"★".repeat(fullStars)}
        {hasHalfStar && "⯨"}
        {"☆".repeat(emptyStars)}
      </div>
    </div>
  );
};