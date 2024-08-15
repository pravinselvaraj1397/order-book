import { render, screen } from "@testing-library/react";
import App from "./App";
import OrderBook from "./OrderBook/OrderBook";
import { Provider } from "react-redux";
import store from "./redux/store";

test("renders OrderBook component", () => {
  render(
    <Provider store={store}>
      <OrderBook />
    </Provider>
  );

  expect(screen.getByText(/Bids/i)).toBeInTheDocument();
  expect(screen.getByText(/Asks/i)).toBeInTheDocument();
});
