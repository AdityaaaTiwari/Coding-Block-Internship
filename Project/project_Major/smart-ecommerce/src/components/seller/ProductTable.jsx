const ProductTable = ({ products = [] }) => {
  return (
    <div className="overflow-hidden rounded-[16px] bg-white shadow-sm">
      <table className="min-w-full text-sm">
        <thead className="bg-slate-100">
          <tr>
            <th className="px-4 py-3 text-left">Product</th>
            <th className="px-4 py-3 text-left">Price</th>
            <th className="px-4 py-3 text-left">Stock</th>
          </tr>
        </thead>
        <tbody>
          {products.length === 0 ? (
            <tr>
              <td className="px-4 py-3">No products yet</td>
              <td className="px-4 py-3">—</td>
              <td className="px-4 py-3">—</td>
            </tr>
          ) : (
            products.map((product) => (
              <tr key={product.id} className="border-t border-slate-100">
                <td className="px-4 py-3 font-semibold">{product.name}</td>
                <td className="px-4 py-3">₹{Number(product.price || 0).toLocaleString()}</td>
                <td className="px-4 py-3">{product.stock ?? 0}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
