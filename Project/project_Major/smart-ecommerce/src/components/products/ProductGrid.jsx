import ProductCard from "./ProductCard";

const ProductGrid = ({ products, search }) => {

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (

    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

      {filteredProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}

    </div>

  );
};

export default ProductGrid;