
export const ProductCard = ({ product }) => {
  const discountedPrice = (
    product.price - (product.price * product.discountPercentage) / 100
  ).toFixed(2);

  return (
    <div>
      <img src={product.thumbnail} alt={product.title} width="150" />

      <h2>{product.title}</h2>

      <p>Precio original: ${product.price}</p>

      <p>Descuento: {product.discountPercentage}%</p>

      <p>Precio final: ${discountedPrice}</p>

      <p>Rating: ⭐ {product.rating}</p>
    </div>
  );
};