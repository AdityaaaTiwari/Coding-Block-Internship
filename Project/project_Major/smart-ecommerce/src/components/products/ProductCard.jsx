import { FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">

      <img
        src={product.image}
        alt={product.name}
        className="h-56 w-full object-cover"
      />

      <div className="p-5">

        <span className="text-sm text-blue-600">
          {product.category}
        </span>

        <h3 className="text-xl font-semibold mt-2">
          {product.name}
        </h3>

        <div className="flex items-center gap-2 mt-3">
          <FaStar className="text-yellow-500" />
          <span>{product.rating}</span>
        </div>

        <div className="flex items-center gap-3 mt-4">
          <span className="text-2xl font-bold text-blue-600">
            ₹{product.price.toLocaleString()}
          </span>

          <span className="line-through text-gray-400">
            ₹{product.oldPrice.toLocaleString()}
          </span>
        </div>

        <div className="flex gap-3 mt-5">

          <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2">
            <FaShoppingCart />
            Cart
          </button>

          <button className="border p-3 rounded-lg hover:bg-red-100">
            <FaHeart />
          </button>

        </div>

      </div>

    </div>
  );
};

export default ProductCard;