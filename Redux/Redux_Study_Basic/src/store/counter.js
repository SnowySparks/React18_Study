import { createSlice } from "@reduxjs/toolkit";

const initalCounterData = {
  counter: 0,
  showCounter: true,
};

const counterSlice = createSlice({
  name: "counter", // store 이름
  initialState: { ...initalCounterData }, // state 초기값
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter += action.payload;
    },
    decrease(state, action) {
      state.counter -= action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
