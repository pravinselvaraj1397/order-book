import store from "../redux/store";
import { updateOrderBook } from "../redux/orderBookSlice";

const socket = new WebSocket("wss://api-pub.bitfinex.com/ws/2");

socket.onopen = () => {
  socket.send(
    JSON.stringify({
      event: "subscribe",
      channel: "book",
      symbol: "tBTCUSD",
    })
  );
};

socket.onmessage = (event) => {
  const data = JSON.parse(event.data);

  // Assuming the structure is correct, you should process the data to extract bids and asks.
  const bids = []; // Process bids from data
  const asks = []; // Process asks from data

  // Example of how you might process data, depending on Bitfinex's structure
  if (Array.isArray(data)) {
    const [channelId, orderType, price, count, amount] = data;

    if (orderType === "bids") {
      // Process bids
      bids.push({ price, count, amount });
    } else if (orderType === "asks") {
      // Process asks
      asks.push({ price, count, amount });
    }
  }

  store.dispatch(updateOrderBook({ bids, asks }));
};

export default socket;
