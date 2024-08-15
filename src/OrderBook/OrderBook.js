import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import "./style.scss";

const OrderBook = () => {
  const bids = useSelector((state) => state.orderBook.bids);
  const asks = useSelector((state) => state.orderBook.asks);
  const [precision, setPrecision] = useState(2);
  const memoizedBids = useMemo(() => bids, [bids]);
  const memoizedAsks = useMemo(() => asks, [asks]);
  const increasePrecision = () => {
    setPrecision(precision + 1);
  };

  const decreasePrecision = () => {
    if (precision > 0) setPrecision(precision - 1);
  };

  return (
    <div className="order-book">
      <div className="controls">
        <button onClick={increasePrecision}>Increase Precision</button>
        <button onClick={decreasePrecision}>Decrease Precision</button>
      </div>
      {memoizedBids.map((bid, index) => (
        <div key={index} className="order">
          <span>{bid.price.toFixed(precision)}</span>
          <span>{bid.amount.toFixed(2)}</span>
        </div>
      ))}
      <div className="order-book-section">
        <h2>Bids</h2>
        {bids.map((bid, index) => (
          <div key={index} className="order">
            <span>{bid.price}</span>
            <span>{bid.amount}</span>
          </div>
        ))}
      </div>
      <div className="order-book-section">
        <h2>Asks</h2>
        {asks.map((ask, index) => (
          <div key={index} className="order">
            <span>{ask.price}</span>
            <span>{ask.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderBook;
