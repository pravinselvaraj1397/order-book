import { configureStore } from "@reduxjs/toolkit";
import orderBookReducer from "./orderBook.slice";

const store = configureStore({
  reducer: {
    orderBook: orderBookReducer,
  },
});

// In JavaScript, you don't need to export types like `RootState` or `AppDispatch`.
// Those were TypeScript-specific and are omitted in JavaScript.
export default store;
