
export const CategoryFilter = ({ products }) => {
  const categories = [
    ...new Set(products.map(product => product.category))
    // esta funcion me permite eliminar productos repetidos
  ];

  return (
    <div>
      <h2>Categorías</h2>

      {categories.map((category, index) => (
        <button key={index}>
          {category}
        </button>
      ))}
    </div>
  );
};