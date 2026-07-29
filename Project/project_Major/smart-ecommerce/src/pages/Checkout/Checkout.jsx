import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { clearCart } from "../../redux/features/cart/cartSlice";
import { placeOrder } from "../../redux/features/order/orderSlice";

const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector(
    (state) => state.cart.cartItems
  );

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shipping = subtotal > 1000 ? 0 : 99;
  const total = subtotal + shipping;

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    if (cartItems.length === 0) return;

    dispatch(
      placeOrder({
        items: cartItems,
        subtotal,
        shipping,
        total,
      })
    );

    dispatch(clearCart());

    navigate("/orders");
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">

      <h1 className="text-5xl font-bold mb-10">
        Checkout
      </h1>

      <div className="grid lg:grid-cols-2 gap-12">

        <form
          onSubmit={handlePlaceOrder}
          className="bg-white shadow-lg rounded-2xl p-8 space-y-5"
        >

          <h2 className="text-2xl font-bold">
            Shipping Details
          </h2>

          <input
            type="text"
            placeholder="Full Name"
            required
            className="w-full border rounded-lg p-3"
          />

          <input
            type="email"
            placeholder="Email"
            required
            className="w-full border rounded-lg p-3"
          />

          <input
            type="text"
            placeholder="Phone Number"
            required
            className="w-full border rounded-lg p-3"
          />

          <textarea
            rows="4"
            placeholder="Address"
            required
            className="w-full border rounded-lg p-3"
          />

          <button
            className="w-full bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700"
          >
            Place Order
          </button>

        </form>

        <div className="bg-white shadow-lg rounded-2xl p-8">

          <h2 className="text-2xl font-bold mb-6">
            Order Summary
          </h2>

          {cartItems.map((item) => (

            <div
              key={item.id}
              className="flex justify-between mb-4"
            >

              <span>
                {item.name} × {item.quantity}
              </span>

              <span>
                ₹{(item.price * item.quantity).toLocaleString()}
              </span>

            </div>

          ))}

          <hr className="my-5"/>

          <div className="flex justify-between mb-3">

            <span>Subtotal</span>

            <span>
              ₹{subtotal.toLocaleString()}
            </span>

          </div>

          <div className="flex justify-between mb-3">

            <span>Shipping</span>

            <span>
              {shipping === 0 ? "FREE" : `₹${shipping}`}
            </span>

          </div>

          <hr className="my-5"/>

          <div className="flex justify-between text-2xl font-bold">

            <span>Total</span>

            <span>
              ₹{total.toLocaleString()}
            </span>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Checkout;