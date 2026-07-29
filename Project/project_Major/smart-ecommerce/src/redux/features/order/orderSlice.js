import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getOrders as getOrdersService,
  getOrder as getOrderService,
  getOrdersByUser as getOrdersByUserService,
  createOrder as createOrderService,
  updateOrderStatus as updateOrderStatusService,
  deleteOrder as deleteOrderService,
} from "../../../services/orderService.js";

const initialState = {
  orders: [],
  loading: false,
  error: null,
};

export const fetchOrders = createAsyncThunk(
  "orders/fetchOrders",
  async (_, { rejectWithValue }) => {
    try {
      const data = await getOrdersService();
      return data.orders || data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const fetchOrder = createAsyncThunk(
  "orders/fetchOrder",
  async (id, { rejectWithValue }) => {
    try {
      const data = await getOrderService(id);
      return data.order || data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const fetchOrdersByUser = createAsyncThunk(
  "orders/fetchOrdersByUser",
  async (userId, { rejectWithValue }) => {
    try {
      const data = await getOrdersByUserService(userId);
      return data.orders || data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const createNewOrder = createAsyncThunk(
  "orders/createNewOrder",
  async (orderData, { rejectWithValue }) => {
    try {
      const data = await createOrderService(orderData);
      return data.order || data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const updateOrder = createAsyncThunk(
  "orders/updateOrder",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await updateOrderStatusService(id, data);
      return response.order || response;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const removeOrder = createAsyncThunk(
  "orders/removeOrder",
  async (id, { rejectWithValue }) => {
    try {
      await deleteOrderService(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    placeOrder: (state, action) => {
      state.orders.unshift({
        id: Date.now(),
        date: new Date().toLocaleDateString(),
        status: "Processing",
        items: action.payload.items,
        subtotal: action.payload.subtotal,
        shipping: action.payload.shipping,
        total: action.payload.total,
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })
      .addCase(fetchOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOrder.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload) {
          const exists = state.orders.some((order) => order.id === action.payload.id);
          if (!exists) {
            state.orders.push(action.payload);
          }
        }
      })
      .addCase(fetchOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })
      .addCase(fetchOrdersByUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOrdersByUser.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload;
      })
      .addCase(fetchOrdersByUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })
      .addCase(createNewOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createNewOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.orders.unshift(action.payload);
      })
      .addCase(createNewOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })
      .addCase(updateOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateOrder.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.orders.findIndex((order) => order.id === action.payload.id);
        if (index !== -1) {
          state.orders[index] = action.payload;
        }
      })
      .addCase(updateOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })
      .addCase(removeOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(removeOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = state.orders.filter((order) => order.id !== action.payload);
      })
      .addCase(removeOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });
  },
});

export const { placeOrder } = orderSlice.actions;

export default orderSlice.reducer;