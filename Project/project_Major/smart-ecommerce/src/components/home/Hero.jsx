import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-slate-100">
      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">

        {/* Left */}
        <div>

          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
            Smart AI Marketplace
          </span>

          <h1 className="text-5xl font-extrabold mt-6 leading-tight">
            Shop Smarter
            <br />
            with
            <span className="text-blue-600"> Bazaar</span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg leading-8">
            Discover products from multiple sellers,
            receive AI-powered recommendations,
            manage your wishlist,
            and enjoy a secure shopping experience.
          </p>

          <div className="flex gap-5 mt-8">

            <Link
              to="/products"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 duration-300"
            >
              Shop Now
            </Link>

            <Link
              to="/seller"
              className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white duration-300"
            >
              Become Seller
            </Link>

          </div>

        </div>

        {/* Right */}

        <div className="flex justify-center">

          <img
            src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=700"
            alt="Shopping"
            className="rounded-2xl shadow-xl"
          />

        </div>

      </div>
    </section>
  );
};

export default Hero;