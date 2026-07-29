import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { decreaseQuantity, increaseQuantity, removeFromCart } from "../../redux/features/cart/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const total = subtotal;

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8">Cart</h1>

      {cartItems.length === 0 ? (
        <div className="bg-white rounded-2xl shadow p-8 text-center">
          <p className="text-gray-600">Your cart is empty.</p>
          <Link to="/products" className="text-blue-600 font-semibold mt-3 inline-block">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl shadow p-4 flex flex-col md:flex-row gap-4 items-center justify-between">
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-blue-600 font-bold">₹{item.price.toLocaleString()}</p>
                </div>
                <div className="flex items-center gap-3">
                  <button onClick={() => dispatch(decreaseQuantity(item.id))} className="px-3 py-1 border rounded">-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => dispatch(increaseQuantity(item.id))} className="px-3 py-1 border rounded">+</button>
                  <button onClick={() => dispatch(removeFromCart(item.id))} className="ml-3 text-red-500">Remove</button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl shadow p-6 h-fit">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className="flex justify-between mb-2"><span>Subtotal</span><span>₹{subtotal.toLocaleString()}</span></div>
            <div className="flex justify-between mb-2"><span>Shipping</span><span>Free</span></div>
            <div className="flex justify-between font-bold text-lg mt-4"><span>Total</span><span>₹{total.toLocaleString()}</span></div>
            <Link to="/checkout" className="block mt-6 text-center bg-blue-600 text-white py-3 rounded-lg">Proceed to Checkout</Link>
          </div>
        </div>
      )}
    </section>
  );
};

export default Cart;