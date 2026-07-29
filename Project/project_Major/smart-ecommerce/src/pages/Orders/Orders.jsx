import { useSelector } from "react-redux";
import { FaBoxOpen } from "react-icons/fa";

const Orders = () => {

  const orders = useSelector(
    (state) => state.orders.orders
  );

  if (orders.length === 0) {

    return (

      <section className="max-w-7xl mx-auto py-20 px-6">

        <div className="text-center">

          <FaBoxOpen
            size={90}
            className="mx-auto text-blue-600"
          />

          <h1 className="text-4xl font-bold mt-8">
            No Orders Yet
          </h1>

          <p className="text-gray-500 mt-4">
            Your placed orders will appear here.
          </p>

        </div>

      </section>

    );

  }

  return (

    <section className="max-w-7xl mx-auto py-16 px-6">

      <h1 className="text-5xl font-bold mb-10">
        My Orders
      </h1>

      <div className="space-y-8">

        {orders.map((order) => (

          <div
            key={order.id}
            className="bg-white rounded-2xl shadow-lg p-8"
          >

            <div className="flex justify-between">

              <div>

                <h2 className="font-bold text-xl">

                  Order #{order.id}

                </h2>

                <p className="text-gray-500">

                  {order.date}

                </p>

              </div>

              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full">

                {order.status}

              </span>

            </div>

            <hr className="my-6"/>

            {order.items.map((item) => (

              <div
                key={item.id}
                className="flex justify-between mb-3"
              >

                <span>

                  {item.name} × {item.quantity}

                </span>

                <span>

                  ₹{(
                    item.price * item.quantity
                  ).toLocaleString()}

                </span>

              </div>

            ))}

            <hr className="my-6"/>

            <div className="flex justify-between text-2xl font-bold">

              <span>Total</span>

              <span>

                ₹{order.total.toLocaleString()}

              </span>

            </div>

          </div>

        ))}

      </div>

    </section>

  );

};

export default Orders;