import {
  FaLaptop,
  FaTshirt,
  FaHome,
  FaBook,
  FaFootballBall,
  FaShoppingBasket,
} from "react-icons/fa";

import { GiLipstick, GiToyMallet } from "react-icons/gi";

const categories = [
  { name: "Electronics", icon: <FaLaptop size={35} /> },
  { name: "Fashion", icon: <FaTshirt size={35} /> },
  { name: "Home", icon: <FaHome size={35} /> },
  { name: "Beauty", icon: <GiLipstick size={35} /> },
  { name: "Books", icon: <FaBook size={35} /> },
  { name: "Sports", icon: <FaFootballBall size={35} /> },
  { name: "Toys", icon: <GiToyMallet size={35} /> },
  { name: "Grocery", icon: <FaShoppingBasket size={35} /> },
];

const Categories = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Shop by Category</h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-500">
            Browse a curated mix of categories designed for modern shoppers.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-8">
          {categories.map((item) => (
            <div
              key={item.name}
              className="flex cursor-pointer flex-col items-center rounded-[12px] border border-slate-200 bg-slate-50 p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 text-blue-600">{item.icon}</div>
              <h3 className="font-semibold text-slate-700">{item.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;