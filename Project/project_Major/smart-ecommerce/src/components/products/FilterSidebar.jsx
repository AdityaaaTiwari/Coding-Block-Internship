const FilterSidebar = () => {
  return (
    <aside className="bg-white rounded-xl shadow p-5">

      <h2 className="text-xl font-bold mb-4">
        Filters
      </h2>

      <div className="space-y-3">

        <label className="block">
          <input type="checkbox" />
          <span className="ml-2">Electronics</span>
        </label>

        <label className="block">
          <input type="checkbox" />
          <span className="ml-2">Fashion</span>
        </label>

        <label className="block">
          <input type="checkbox" />
          <span className="ml-2">Sports</span>
        </label>

        <label className="block">
          <input type="checkbox" />
          <span className="ml-2">Books</span>
        </label>

      </div>

    </aside>
  );
};

export default FilterSidebar;