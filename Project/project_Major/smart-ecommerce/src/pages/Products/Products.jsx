import { useState } from "react";

import SearchBar from "../../components/products/SearchBar";
import SortDropdown from "../../components/products/SortDropdown";
import FilterSidebar from "../../components/products/FilterSidebar";
import ProductGrid from "../../components/products/ProductGrid";

import products from "../../data/products";

const Products = () => {

  const [search, setSearch] = useState("");

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">

      <h1 className="text-4xl font-bold mb-8">
        All Products
      </h1>

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <div className="flex justify-end mb-6">
        <SortDropdown />
      </div>

      <div className="grid lg:grid-cols-4 gap-8">

        <FilterSidebar />

        <ProductGrid
          products={products}
          search={search}
        />

      </div>

    </section>
  );
};

export default Products;