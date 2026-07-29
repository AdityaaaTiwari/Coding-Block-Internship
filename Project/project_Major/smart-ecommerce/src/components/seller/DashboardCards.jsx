const DashboardCards = ({ products = [], orders = [] }) => {
  const revenue = products.reduce((sum, product) => sum + Number(product.price || 0) * 10, 0);

  return (
    <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3">
      <div className="rounded-[16px] bg-white p-4 shadow-sm">
        <h3 className="text-sm font-semibold text-gray-500">Products</h3>
        <p className="mt-2 text-2xl font-bold">{products.length}</p>
      </div>
      <div className="rounded-[16px] bg-white p-4 shadow-sm">
        <h3 className="text-sm font-semibold text-gray-500">Orders</h3>
        <p className="mt-2 text-2xl font-bold">{orders.length}</p>
      </div>
      <div className="rounded-[16px] bg-white p-4 shadow-sm">
        <h3 className="text-sm font-semibold text-gray-500">Revenue</h3>
        <p className="mt-2 text-2xl font-bold">₹{revenue.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default DashboardCards;
