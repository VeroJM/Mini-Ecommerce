import "../styles/SearchBar.css";

export const SearchBar = ({ search, setSearch }) => {

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <input className="search-input"
        type="text"
        placeholder="Buscar producto..."
        value={search}
        onChange={handleChange}
      />
    </div>
  );
};