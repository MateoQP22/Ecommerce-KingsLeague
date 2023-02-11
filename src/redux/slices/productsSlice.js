import { createSlice } from '@reduxjs/toolkit';
import { fetchReadCategoryMen, fetchReadCategoryWoman, fetchReadProduct, fetchReadProducts } from '../thunks/productsThunk';

const initialState = {
  loading: false,
  error: {},
  products: [],
  product: [],
  categoryMen: [],
  categoryWoman: []
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
      state.product = [];
    });
    //categoryMen
    builder.addCase(fetchReadCategoryMen.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchReadCategoryMen.fulfilled, (state, {payload}) => {
      state.loading = false;
      state.error = {};
      state.categoryMen = payload;
    });
    builder.addCase(fetchReadCategoryMen.rejected, (state, {payload}) => {
      state.loading = false;
      state.error = payload;
      state.categoryMen = [];
    });
    //categoryWoman
    builder.addCase(fetchReadCategoryWoman.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchReadCategoryWoman.fulfilled, (state, {payload}) => {
      state.loading = false;
      state.error = {};
      state.categoryWoman = payload;
    });
    builder.addCase(fetchReadCategoryWoman.rejected, (state, {payload}) => {
      state.loading = false;
      state.error = payload;
      state.categoryWoman = [];
    });
  }
});

export default productsSlice.reducer;