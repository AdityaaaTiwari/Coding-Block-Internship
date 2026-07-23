const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search by student name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;