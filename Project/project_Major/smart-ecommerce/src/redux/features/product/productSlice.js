import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productsData from "../../../data/products";
import {
  getProducts as getProductsService,
  createProduct as createProductService,
  updateProduct as updateProductService,
  deleteProduct as deleteProductService,
} from "../../../services/productService.js";

const initialState = {
  products: productsData,
  loading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, { rejectWithValue }) => {
    try {
      const data = await getProductsService();
      return data.products || data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const createNewProduct = createAsyncThunk(
  "products/createNewProduct",
  async (productData, { rejectWithValue }) => {
    try {
      const data = await createProductService(productData);
      return data.product || data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const updateExistingProduct = createAsyncThunk(
  "products/updateExistingProduct",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await updateProductService(id, data);
      return response.product || response;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const removeProduct = createAsyncThunk(
  "products/removeProduct",
  async (id, { rejectWithValue }) => {
    try {
      await deleteProductService(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },

    updateProduct: (state, action) => {
      const index = state.products.findIndex(
        (product) => product.id === action.payload.id
      );

      if (index !== -1) {
        state.products[index] = action.payload;
      }
    },

    deleteProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },

    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })
      .addCase(createNewProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createNewProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products.push(action.payload);
      })
      .addCase(createNewProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })
      .addCase(updateExistingProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateExistingProduct.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.products.findIndex((product) => product.id === action.payload.id);

        if (index !== -1) {
          state.products[index] = action.payload;
        }
      })
      .addCase(updateExistingProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })
      .addCase(removeProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(removeProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products = state.products.filter((product) => product.id !== action.payload);
      })
      .addCase(removeProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });
  },
});

export const { addProduct, updateProduct, deleteProduct, setProducts } = productSlice.actions;

export default productSlice.reducer;