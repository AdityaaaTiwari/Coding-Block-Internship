import { createSlice } from "@reduxjs/toolkit";

const loadWishlistState = () => {
  try {
    const stored = localStorage.getItem("wishlistItems");
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

const initialState = {
  wishlistItems: loadWishlistState(),
};

const wishlistSlice = createSlice({
  name: "wishlist",

  initialState,

  reducers: {
    addToWishlist: (state, action) => {
      const existingItem = state.wishlistItems.find(
        (item) => item.id === action.payload.id
      );

      if (!existingItem) {
        state.wishlistItems.push(action.payload);
      }

      localStorage.setItem("wishlistItems", JSON.stringify(state.wishlistItems));
    },

    removeFromWishlist: (state, action) => {
      state.wishlistItems = state.wishlistItems.filter(
        (item) => item.id !== action.payload
      );
      localStorage.setItem("wishlistItems", JSON.stringify(state.wishlistItems));
    },

    clearWishlist: (state) => {
      state.wishlistItems = [];
      localStorage.setItem("wishlistItems", JSON.stringify(state.wishlistItems));
    },
  },
});

export const {
  addToWishlist,
  removeFromWishlist,
  clearWishlist,
} = wishlistSlice.actions;

export default wishlistSlice.reducer;