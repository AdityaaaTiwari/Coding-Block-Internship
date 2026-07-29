import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Smart AI Marketplace
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold leading-tight text-slate-900">
            Shop smarter with
            <span className="block text-blue-600">modern marketplace experiences</span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-xl">
            Discover curated products, enjoy AI-inspired recommendations, and manage your shopping journey with ease.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              to="/products"
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 hover:-translate-y-0.5"
            >
              Shop Now
            </Link>

            <Link
              to="/seller"
              className="inline-flex items-center justify-center rounded-xl border border-blue-600 px-6 py-3 font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white hover:-translate-y-0.5"
            >
              Become Seller
            </Link>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=700"
            alt="Shopping"
            className="w-full max-w-xl rounded-[20px] border border-slate-200 shadow-[0_20px_60px_-15px_rgba(37,99,235,0.25)]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;