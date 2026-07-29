import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-20 bg-slate-900 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div>
          <h2 className="text-3xl font-bold text-blue-400">Bazaar</h2>
          <p className="mt-4 leading-7 text-gray-400">
            Smart multi-vendor marketplace powered by modern React and Node.js experiences.
          </p>
        </div>

        <div>
          <h3 className="mb-5 text-xl font-semibold">Quick Links</h3>
          <ul className="space-y-3 text-gray-400">
            <li><Link to="/" className="transition hover:text-blue-400">Home</Link></li>
            <li><Link to="/products" className="transition hover:text-blue-400">Products</Link></li>
            <li><Link to="/seller" className="transition hover:text-blue-400">Seller Dashboard</Link></li>
            <li><Link to="/about" className="transition hover:text-blue-400">About</Link></li>
            <li><Link to="/contact" className="transition hover:text-blue-400">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-xl font-semibold">Categories</h3>
          <ul className="space-y-3 text-gray-400">
            <li>Electronics</li>
            <li>Fashion</li>
            <li>Home & Living</li>
            <li>Sports</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-xl font-semibold">Connect</h3>
          <div className="flex gap-5 text-2xl">
            <FaFacebook className="cursor-pointer transition hover:text-blue-400" />
            <FaInstagram className="cursor-pointer transition hover:text-pink-500" />
            <FaLinkedin className="cursor-pointer transition hover:text-blue-500" />
            <FaGithub className="cursor-pointer transition hover:text-gray-300" />
          </div>
        </div>
      </div>

      <div className="border-t border-slate-700 py-5 text-center text-gray-400">
        © 2026 Bazaar Marketplace | Developer: Aditya Tiwari
      </div>
    </footer>
  );
};

export default Footer;