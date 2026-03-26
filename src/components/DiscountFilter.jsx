
export const DiscountFilter = ({ onlyDiscount, setOnlyDiscount }) => {

  const handleChange = (e) => {
    setOnlyDiscount(e.target.checked);
  };

  return (
    <div>
      <label>
        <input 
          type="checkbox"
          checked={onlyDiscount}
          onChange={handleChange}
        />
        Mostrar solo productos con descuento
      </label>
    </div>
  );
};