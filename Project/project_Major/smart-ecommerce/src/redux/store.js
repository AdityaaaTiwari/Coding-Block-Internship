import { configureStore } from "@reduxjs/toolkit";

import productReducer from "./features/product/productSlice";
import cartReducer from "./features/cart/cartSlice";
import wishlistReducer from "./features/whislist/whislistSlice";
import authReducer from "./features/auth/authSlice";
import orderReducer from "./features/order/orderSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
    auth: authReducer,
    orders: orderReducer,
  },
});