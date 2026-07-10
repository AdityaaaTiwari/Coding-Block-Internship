import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white mt-20">

      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-10">

        {/* Logo */}
        <div>
          <h2 className="text-3xl font-bold text-blue-400">
            Bazaar
          </h2>

          <p className="mt-4 text-gray-400 leading-7">
            Smart Multi Vendor Marketplace built with React,
            Node.js, PostgreSQL, Redis and AI Product
            Recommendation.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-5">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-400">

            <li><Link to="/">Home</Link></li>

            <li><Link to="/products">Products</Link></li>

            <li><Link to="/seller">Seller Dashboard</Link></li>

            <li><Link to="/contact">Contact</Link></li>

          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-xl font-semibold mb-5">
            Categories
          </h3>

          <ul className="space-y-3 text-gray-400">

            <li>Electronics</li>

            <li>Fashion</li>

            <li>Home & Living</li>

            <li>Sports</li>

          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-xl font-semibold mb-5">
            Connect
          </h3>

          <div className="flex gap-5 text-2xl">

            <FaFacebook className="cursor-pointer hover:text-blue-400 duration-300" />

            <FaInstagram className="cursor-pointer hover:text-pink-500 duration-300" />

            <FaLinkedin className="cursor-pointer hover:text-blue-500 duration-300" />

            <FaGithub className="cursor-pointer hover:text-gray-300 duration-300" />

          </div>

        </div>

      </div>

      <div className="border-t border-slate-700 py-5 text-center text-gray-400">

        © 2026 Bazaar Marketplace | All Rights Reserved

      </div>

    </footer>
  );
};

export default Footer;