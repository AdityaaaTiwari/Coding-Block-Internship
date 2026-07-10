import { Link } from "react-router-dom";
import { FaShoppingCart, FaHeart, FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="max-w-7xl mx-auto flex items-center justify-between h-20 px-6">

        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-bold text-blue-600 tracking-wide"
        >
          Bazaar
        </Link>

        {/* Search */}
        <div className="hidden lg:block w-96">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-6 font-medium">

          <Link className="hover:text-blue-600 duration-200" to="/">
            Home
          </Link>

          <Link className="hover:text-blue-600 duration-200" to="/products">
            Products
          </Link>

          <Link className="hover:text-blue-600 duration-200" to="/seller">
            Seller
          </Link>

          <Link className="hover:text-blue-600 duration-200" to="/about">
            About
          </Link>

          <Link className="hover:text-blue-600 duration-200" to="/contact">
            Contact
          </Link>

        </div>

        {/* Icons */}
        <div className="flex items-center gap-5">

          <Link to="/wishlist">
            <FaHeart
              size={20}
              className="hover:text-red-500 duration-200"
            />
          </Link>

          <Link to="/cart">
            <FaShoppingCart
              size={20}
              className="hover:text-blue-600 duration-200"
            />
          </Link>

          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 duration-200 flex items-center gap-2">
            <FaUserCircle />
            Login
          </button>

        </div>

      </nav>
    </header>
  );
};

export default Navbar;