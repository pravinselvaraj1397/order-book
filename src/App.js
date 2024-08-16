import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateOrderBook } from "./redux/orderBook.slice";
import OrderBook from "./OrderBook/OrderBook";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const bids = JSON.parse(localStorage.getItem("bids") || "[]");
    const asks = JSON.parse(localStorage.getItem("asks") || "[]");
    dispatch(updateOrderBook({ bids, asks }));

    return () => {
      localStorage.setItem("bids", JSON.stringify(bids));
      localStorage.setItem("asks", JSON.stringify(asks));
    };
  }, [dispatch]);

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
      console.log(data[1], "ll");

      if (Array.isArray(data[1])) {
        const [price, count, amount] = data[1];
        const orderType = amount < 0 ? "bids" : "asks";
        dispatch(
          updateOrderBook({
            [orderType]: [{ price, count, amount: Math.abs(amount) }],
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
