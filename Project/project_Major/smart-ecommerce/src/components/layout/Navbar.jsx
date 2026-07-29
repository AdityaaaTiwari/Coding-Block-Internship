import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaShoppingCart, FaHeart, FaUserCircle } from "react-icons/fa";
import { logout } from "../../redux/features/auth/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="text-3xl font-bold tracking-wide text-blue-600">
          Bazaar
        </Link>

        <div className="hidden w-96 lg:block">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full rounded-[10px] border border-slate-300 px-4 py-2 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        <div className="flex items-center gap-5 font-medium text-slate-700">
          <NavLink className={({ isActive }) => `transition hover:text-blue-600 ${isActive ? "font-semibold text-blue-600" : ""}`} to="/">
            Home
          </NavLink>
          <NavLink className={({ isActive }) => `transition hover:text-blue-600 ${isActive ? "font-semibold text-blue-600" : ""}`} to="/products">
            Products
          </NavLink>
          <NavLink className={({ isActive }) => `transition hover:text-blue-600 ${isActive ? "font-semibold text-blue-600" : ""}`} to="/seller">
            Seller
          </NavLink>
          <NavLink className={({ isActive }) => `transition hover:text-blue-600 ${isActive ? "font-semibold text-blue-600" : ""}`} to="/about">
            About
          </NavLink>
          <NavLink className={({ isActive }) => `transition hover:text-blue-600 ${isActive ? "font-semibold text-blue-600" : ""}`} to="/contact">
            Contact
          </NavLink>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/wishlist" className="relative rounded-full p-2 text-slate-600 transition hover:bg-slate-100 hover:text-red-500">
            <FaHeart size={18} />
            {wishlistItems.length > 0 && <span className="absolute -right-1 -top-1 rounded-full bg-red-500 px-1.5 text-[10px] font-semibold text-white">{wishlistItems.length}</span>}
          </Link>

          <Link to="/cart" className="relative rounded-full p-2 text-slate-600 transition hover:bg-slate-100 hover:text-blue-600">
            <FaShoppingCart size={18} />
            {cartItems.length > 0 && <span className="absolute -right-1 -top-1 rounded-full bg-blue-600 px-1.5 text-[10px] font-semibold text-white">{cartItems.length}</span>}
          </Link>

          {isAuthenticated ? (
            <button onClick={handleLogout} className="flex items-center gap-2 rounded-[10px] bg-slate-900 px-4 py-2 font-semibold text-white transition hover:bg-slate-700">
              <FaUserCircle />
              {user?.name || "Logout"}
            </button>
          ) : (
            <Link to="/login" className="flex items-center gap-2 rounded-[10px] bg-blue-600 px-4 py-2 font-semibold text-white transition hover:bg-blue-700">
              <FaUserCircle />
              Login
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;