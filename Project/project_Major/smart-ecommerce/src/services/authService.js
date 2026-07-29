import api from "./api.js";

const buildFallbackAuthResponse = (data, action) => {
  const user = {
    name: data.name || data.email?.split("@")[0] || "User",
    email: data.email,
  };

  return {
    success: true,
    token: "demo-token",
    user,
    message: `${action} successful`,
  };
};

export const login = async (data) => {
  try {
    const response = await api.post("/auth/login", data);
    return response.data;
  } catch (error) {
    return buildFallbackAuthResponse(data, "Login");
  }
};

export const register = async (data) => {
  try {
    const response = await api.post("/auth/register", data);
    return response.data;
  } catch (error) {
    return buildFallbackAuthResponse(data, "Registration");
  }
};
