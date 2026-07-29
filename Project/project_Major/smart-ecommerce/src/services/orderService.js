import api from "./api.js";

export const getOrders = async () => {
  const response = await api.get("/orders");
  return response.data;
};

export const getOrder = async (id) => {
  const response = await api.get(`/orders/${id}`);
  return response.data;
};

export const getOrdersByUser = async (userId) => {
  const response = await api.get(`/orders/user/${userId}`);
  return response.data;
};

export const createOrder = async (data) => {
  const response = await api.post("/orders", data);
  return response.data;
};

export const updateOrderStatus = async (id, data) => {
  const response = await api.put(`/orders/${id}`, data);
  return response.data;
};

export const deleteOrder = async (id) => {
  const response = await api.delete(`/orders/${id}`);
  return response.data;
};
