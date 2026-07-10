const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="mb-8">

      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search Products..."
        className="w-full border rounded-xl px-5 py-3"
      />

    </div>
  );
};

export default SearchBar;