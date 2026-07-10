const SortDropdown = () => {
  return (
    <select className="border border-gray-300 rounded-lg px-4 py-2">
      <option>Sort By</option>
      <option>Price: Low to High</option>
      <option>Price: High to Low</option>
      <option>Highest Rated</option>
    </select>
  );
};

export default SortDropdown;