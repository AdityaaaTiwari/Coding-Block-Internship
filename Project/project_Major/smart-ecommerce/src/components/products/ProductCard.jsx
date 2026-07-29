import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";
import { addToCart } from "../../redux/features/cart/cartSlice";
import { addToWishlist, removeFromWishlist } from "../../redux/features/whislist/whislistSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);
  const isWishlisted = wishlistItems.some((item) => item.id === product.id);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const handleWishlistToggle = () => {
    if (isWishlisted) {
      dispatch(removeFromWishlist(product.id));
    } else {
      dispatch(addToWishlist(product));
    }
  };

  return (
    <div className="overflow-hidden rounded-[20px] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <img src={product.image} alt={product.name} className="h-56 w-full object-cover" />

      <div className="p-5">
        <span className="text-sm font-semibold uppercase tracking-wide text-blue-600">{product.category}</span>
        <h3 className="mt-2 text-xl font-semibold text-slate-900">{product.name}</h3>

        <div className="mt-3 flex items-center gap-2 text-sm text-slate-600">
          <FaStar className="text-yellow-500" />
          <span>{product.rating}</span>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <span className="text-2xl font-bold text-blue-600">₹{product.price.toLocaleString()}</span>
          <span className="text-sm text-gray-400 line-through">₹{product.oldPrice.toLocaleString()}</span>
        </div>

        <div className="mt-5 flex gap-3">
          <button
            onClick={handleAddToCart}
            className="flex flex-1 items-center justify-center gap-2 rounded-[10px] bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            <FaShoppingCart />
            Add to Cart
          </button>

          <button
            onClick={handleWishlistToggle}
            className={`rounded-[10px] border p-3 transition ${isWishlisted ? "border-red-200 bg-red-50 text-red-500" : "border-slate-200 text-slate-600 hover:bg-red-50 hover:text-red-500"}`}
          >
            <FaHeart />
          </button>
        </div>

        <Link to={`/product/${product.id}`} className="mt-4 block text-sm font-semibold text-blue-600 hover:text-blue-700">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;