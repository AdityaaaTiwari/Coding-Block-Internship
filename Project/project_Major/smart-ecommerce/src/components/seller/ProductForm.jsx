import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/features/product/productSlice";

const ProductForm = () => {
  const dispatch = useDispatch();

  const [product, setProduct] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
    brand: "",
  });

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      addProduct({
        id: Date.now(),
        ...product,
        price: Number(product.price),
        stock: Number(product.stock),
        image: "https://placehold.co/300x300",
        rating: 4.5,
        description: "New Product",
        features: [],
      })
    );

    setProduct({
      name: "",
      category: "",
      price: "",
      stock: "",
      brand: "",
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mt-10">
      <h2 className="text-2xl font-bold mb-6">
        Add New Product
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid md:grid-cols-2 gap-5"
      >
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={product.name}
          onChange={handleChange}
          required
          className="border rounded-lg p-3"
        />

        <input
          type="text"
          name="brand"
          placeholder="Brand"
          value={product.brand}
          onChange={handleChange}
          required
          className="border rounded-lg p-3"
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={product.category}
          onChange={handleChange}
          required
          className="border rounded-lg p-3"
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={product.price}
          onChange={handleChange}
          required
          className="border rounded-lg p-3"
        />

        <input
          type="number"
          name="stock"
          placeholder="Stock"
          value={product.stock}
          onChange={handleChange}
          required
          className="border rounded-lg p-3"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white rounded-lg p-3 hover:bg-blue-700 md:col-span-2"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default ProductForm;