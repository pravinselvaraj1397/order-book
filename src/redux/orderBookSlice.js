import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bids: [],
  asks: [],
};

const orderBookSlice = createSlice({
  name: "orderBook",
  initialState,
  reducers: {
    updateOrderBook: (state, action) => {
      state.bids = action.payload.bids;
      state.asks = action.payload.asks;
    },
  },
});

export const { updateOrderBook } = orderBookSlice.actions;
export default orderBookSlice.reducer;
