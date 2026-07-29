const Newsletter = () => {
  return (
    <section className="bg-slate-100 py-20">
      <div className="mx-auto max-w-5xl rounded-[20px] bg-white px-8 py-12 text-center shadow-sm">
        <h2 className="text-3xl font-bold text-slate-900">Stay updated with the latest deals</h2>
        <p className="mx-auto mt-3 max-w-2xl text-gray-500">
          Join our newsletter for curated offers, product launches, and marketplace updates.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full max-w-md rounded-[10px] border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
          />
          <button className="rounded-[10px] bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;