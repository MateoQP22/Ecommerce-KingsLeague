import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../configs/axiosInstance";

export const fetchReadProducts = createAsyncThunk (
  'products/fetchReadProducts',
  async (_, {rejectWithValue}) => {
    try {
      const options = {
        method: 'GET',
        url:'/products'

      };
      const {data} = await axiosInstance(options);
      console.log(data)
      return data ?? [];
    } catch (error) {
      return rejectWithValue(error);
    }
    
  }
);

export const fetchReadProduct = createAsyncThunk (
  'products/fetchReadProduct',
  async (id, {rejectWithValue}) => {
    try {
      const options = {
        method: 'GET',
        url:`/products/${id}`
      };
      const {data} = await axiosInstance(options);
      return data ?? [];
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchReadCategoryMen = createAsyncThunk (
  'products/fetchReadCategoryMen',
  async (_, {rejectWithValue}) => {
    try {
      const options = {
        method: 'GET',
        url:`/products/category/men's clothing`
      };
      const {data} = await axiosInstance(options);
      return data ?? [];
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchReadCategoryWoman = createAsyncThunk (
  'products/fetchReadCategoryWoman',
  async (_, {rejectWithValue}) => {
    try {
      const options = {
        method: 'GET',
        url:`/products/category/women's clothing`
      };
      const {data} = await axiosInstance(options);
      return data ?? [];
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);