import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../configs/axiosInstance";

export const fetchReadProducts = createAsyncThunk (
  'home/fetchReadProducts',
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
  'home/fetchReadProduct',
  async (slug, {rejectWithValue}) => {
    try {
      const options = {
        method: 'GET',
        url:`/products?filters[slug][$eq]=${slug}`
      };
      const {data} = await axiosInstance(options);
      return data ?? [];
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);