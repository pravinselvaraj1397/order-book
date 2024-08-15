import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bids: [],
  asks: [],
};

const orderBookSlice = createSlice({
  name: "orderBook",
  initialState,
  reducers: {
    setBids(state, action) {
      state.bids = action.payload;
    },
    setAsks(state, action) {
      state.asks = action.payload;
    },
    updateOrderBook(state, action) {
      state.bids = action.payload.bids;
      state.asks = action.payload.asks;
    },
  },
});

export const { setBids, setAsks, updateOrderBook } = orderBookSlice.actions;
export default orderBookSlice.reducer;
