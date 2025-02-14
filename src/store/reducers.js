import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const incrementSync = createAsyncThunk("INCREMENTSYNC", async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
});

const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0, loading: false },
  reducers: {
    increment: (state) => {
      state.count++;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementSync.pending, (state) => {
        state.loading = true;
      })
      .addCase(incrementSync.fulfilled, (state) => {
        state.loading = false;
        state.count++;
      });
  },
});

export const { increment } = counterSlice.actions;

export default counterSlice;
