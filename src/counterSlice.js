// src/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementAsync: () => {},
    decrementAsync: () => {},
  },
});

export const { increment, decrement, incrementAsync, decrementAsync } = counterSlice.actions;
export const selectCount = (state) => state.counter.value;
export default counterSlice.reducer;
