import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromWishlist } from "../../redux/features/whislist/whislistSlice";

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8">Wishlist</h1>

      {wishlistItems.length === 0 ? (
        <div className="bg-white rounded-2xl shadow p-8 text-center">
          <p className="text-gray-600">Your wishlist is empty.</p>
          <Link to="/products" className="text-blue-600 font-semibold mt-3 inline-block">
            Browse Products
          </Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {wishlistItems.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl shadow p-5">
              <h3 className="font-semibold text-lg">{product.name}</h3>
              <p className="text-blue-600 font-bold mt-2">₹{product.price.toLocaleString()}</p>
              <div className="flex gap-3 mt-4">
                <Link to={`/product/${product.id}`} className="flex-1 text-center bg-blue-600 text-white py-2 rounded-lg">View</Link>
                <button onClick={() => dispatch(removeFromWishlist(product.id))} className="flex-1 border rounded-lg">Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Wishlist;