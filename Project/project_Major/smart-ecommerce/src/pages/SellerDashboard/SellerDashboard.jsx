import DashboardCards from "../../components/seller/DashboardCards";
import ProductTable from "../../components/seller/ProductTable";
import ProductForm from "../../components/seller/ProductForm";
import { useSelector } from "react-redux";

const SellerDashboard = () => {
  const products = useSelector((state) => state.products.products);
  const orders = useSelector((state) => state.orders.orders);

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Seller hub</p>
        <h1 className="mt-2 text-4xl font-bold text-slate-900">Seller Dashboard</h1>
        <p className="mt-3 max-w-2xl text-gray-600">
          Manage your catalog, keep an eye on order activity, and monitor revenue from one place.
        </p>
      </div>

      <DashboardCards products={products} orders={orders} />

      <div className="mt-10">
        <ProductTable products={products} />
      </div>

      <div className="mt-10">
        <ProductForm />
      </div>
    </section>
  );
};

export default SellerDashboard;