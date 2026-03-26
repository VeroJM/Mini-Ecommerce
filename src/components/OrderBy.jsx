
export const OrderBy = ({ order, setOrder }) => {

  const handleChange = (e) => {
    setOrder(e.target.value);
  };

  return (
    <div>
      <h3>Ordenar por:</h3>

      <select value={order} onChange={handleChange}>
        <option value="">Sin orden</option>
        <option value="desc">Mayor rating</option>
        <option value="asc">Menor rating</option>
      </select>
    </div>
  );
};