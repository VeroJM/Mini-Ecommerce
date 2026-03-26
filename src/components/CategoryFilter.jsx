import "../styles/CategoryFilter.css";

export const CategoryFilter = ({ products, setCategory}) => {
  const categories = [
    ...new Set(products.map(product => product.category))
    // esta funcion me permite eliminar productos repetidos
  ];

  const handleChange = (e) => {
    setCategory(e.target.value); // eleccion especifica
  };

  return (
    <div>
      <h2>Selecionar Categoría</h2>

      <select className="category-select" onChange={handleChange}>
        <option value="">Todas</option>

        {categories.map((category, index) => (
            <option key={index} value={category}>
                {category}
            </option>
        ))}
      </select>
    </div>
  );
};