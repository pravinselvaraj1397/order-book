import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateOrderBook } from "./store/orderBookSlice";
import OrderBook from "./components/OrderBook";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const ws = new WebSocket("wss://api-pub.bitfinex.com/ws/2");

    ws.onopen = () => {
      ws.send(
        JSON.stringify({
          event: "subscribe",
          channel: "book",
          symbol: "tBTCUSD",
        })
      );
    };

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);

      if (Array.isArray(data[1])) {
        const [price, count, amount] = data[1];
        const orderType = amount > 0 ? "bids" : "asks";
        dispatch(
          updateOrderBook({
            [orderType]: [{ price, amount: Math.abs(amount) }],
          })
        );
      }
    };

    return () => {
      ws.close();
    };
  }, [dispatch]);

  return (
    <div className="App">
      <OrderBook />
    </div>
  );
};

export default App;
