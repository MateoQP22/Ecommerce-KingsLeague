import { createSlice } from '@reduxjs/toolkit';
import { fetchReadProduct, fetchReadProducts } from '../thunks/productsThunk';

const initialState = {
  loading: false,
  error: {},
  products: [],
  product: {},
};

export const productsSlice = createSlice ({
  name: 'products',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchReadProducts.pending, (state) =>{
      state.loading = true;
    });
        builder.addCase(fetchReadProducts.fulfilled, (state, {payload}) =>{
      state.loading = false;
      state.error = {};
      state.products = payload;
    });
        builder.addCase(fetchReadProducts.rejected, (state, {payload}) =>{
      state.loading = false;
      state.error = payload;
      state.products = [];
    });
    //product
    builder.addCase(fetchReadProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchReadProduct.fulfilled, (state, {payload}) => {
      state.loading = false;
      state.error = {};
      state.product = payload;
    });
    builder.addCase(fetchReadProduct.rejected, (state, {payload}) => {
      state.loading = false;
      state.error = payload;
      state.products = {};
    });
  }
});

export default productsSlice.reducer;