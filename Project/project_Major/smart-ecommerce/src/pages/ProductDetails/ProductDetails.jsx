import { useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import products from "../../data/products";
import { addToCart } from "../../redux/features/cart/cartSlice";
import { addToWishlist } from "../../redux/features/whislist/whislistSlice";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return <div className="max-w-7xl mx-auto px-6 py-16">Product not found.</div>;
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-10">
      <img src={product.image} alt={product.name} className="w-full rounded-2xl shadow-lg" />
      <div>
        <p className="text-blue-600 font-semibold">{product.category}</p>
        <h1 className="text-4xl font-bold mt-3">{product.name}</h1>
        <p className="text-gray-600 mt-4">{product.description || "Premium product with modern design and excellent performance."}</p>
        <div className="flex items-center gap-4 mt-6">
          <span className="text-3xl font-bold text-blue-600">₹{product.price.toLocaleString()}</span>
          <span className="line-through text-gray-400">₹{product.oldPrice.toLocaleString()}</span>
        </div>
        <div className="flex gap-3 mt-8">
          <button onClick={() => dispatch(addToCart(product))} className="bg-blue-600 text-white px-6 py-3 rounded-lg">Add to Cart</button>
          <button onClick={() => dispatch(addToWishlist(product))} className="border px-6 py-3 rounded-lg">Add to Wishlist</button>
        </div>
        <Link to="/products" className="inline-block mt-6 text-blue-600 font-semibold">Back to Products</Link>
      </div>
    </section>
  );
};

export default ProductDetails;