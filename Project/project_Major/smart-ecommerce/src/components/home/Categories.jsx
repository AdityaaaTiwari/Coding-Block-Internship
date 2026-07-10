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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          Shop by Category
        </h2>

        <p className="text-gray-500 text-center mt-3">
          Explore products across different categories.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 mt-12">

          {categories.map((item) => (
            <div
              key={item.name}
              className="bg-white rounded-2xl shadow hover:shadow-xl transition duration-300 cursor-pointer p-6 flex flex-col items-center hover:-translate-y-2"
            >
              <div className="text-blue-600 mb-4">
                {item.icon}
              </div>

              <h3 className="font-semibold text-center">
                {item.name}
              </h3>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Categories;