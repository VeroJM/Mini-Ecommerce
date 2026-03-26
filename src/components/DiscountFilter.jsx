import "../styles/DiscountFilter.css";

export const DiscountFilter = ({ onlyDiscount, setOnlyDiscount }) => {

  const handleChange = (e) => {
    setOnlyDiscount(e.target.checked);
  };

  return (
    <div className="discount-filter">
      <label>
        <input 
          type="checkbox"
          checked={onlyDiscount}
          onChange={handleChange}
        />
        Mostrar solo productos con descuento mayor al 10%
      </label>
    </div>
  );
};