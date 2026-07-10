import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto h-20 flex items-center justify-between px-6">

        <Link
          to="/"
          className="text-3xl font-bold text-blue-600"
        >
          Bazaar
        </Link>

        <div className="flex items-center gap-8">

          <Link to="/">Home</Link>

          <Link to="/products">Products</Link>

          <Link to="/seller">Seller</Link>

          <Link to="/about">About</Link>

          <Link to="/contact">Contact</Link>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;