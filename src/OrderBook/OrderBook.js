// import React, { useMemo, useState } from "react";
// import { useSelector } from "react-redux";
// import "./style.scss";

// const OrderBook = (props) => {
//   const bids = useSelector((state) => state.orderBook.bids);
//   const asks = useSelector((state) => state.orderBook.asks);
//   const [precision, setPrecision] = useState(2);
//   const memoizedBids = useMemo(() => bids, [bids]);
//   const memoizedAsks = useMemo(() => asks, [asks]);
//   const increasePrecision = () => {
//     setPrecision(precision + 1);
//   };

//   const decreasePrecision = () => {
//     if (precision > 0) setPrecision(precision - 1);
//   };

//   console.log(bids, "bids");
//   return (
//     <div className="order-book">
//       <div className="controls">
//         <button onClick={increasePrecision}>Increase Precision</button>
//         <button onClick={decreasePrecision}>Decrease Precision</button>
//       </div>
//       {/* {memoizedBids.map((bid, index) => (
//         <div key={index} className="order">
//           <span>{bid.price.toFixed(precision)}</span>
//           <span>{bid.amount.toFixed(2)}</span>
//         </div>
//       ))} */}
//       {bids?.length == 0 ? (
//         <>
//           <div className="order-book-section">
//             <h2>Bids</h2>
//             {bids?.map((bid, index) => (
//               <div key={index} className="order">
//                 <span>{bid[0]?.price}</span>
//                 <span>{bid[0]?.amount}</span>
//               </div>
//             ))}
//           </div>
//           <div className="order-book-section">
//             <h2>Asks</h2>
//             {asks?.map((ask, index) => (
//               <div key={index} className="order">
//                 <span>{ask?.price}</span>
//                 <span>{ask?.amount}</span>
//               </div>
//             ))}
//           </div>
//         </>
//       ) : (
//         <div className="order">
//           <span>No Data Found</span>
//         </div>
//       )}
//     </div>
//   );
// };

// export default OrderBook;

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

  console.log(asks, "lkl");

  return (
    <div class="order-book">
      <div class="header">
        <span>ORDER BOOK BTC/USD</span>
        {/* <div class="icons">
        </div> */}
      </div>
      <div class="table">
        <div class="table-header">
          <div>COUNT</div>
          <div>AMOUNT</div>
          <div>TOTAL</div>
          <div>PRICE</div>
          <div>PRICE</div>
          <div>TOTAL</div>
          <div>AMOUNT</div>
          <div>COUNT</div>
        </div>
        {bids &&
          bids.map((bid, i) => (
            <div className="table-body" key={i}>
              <div className="row">
                <div>{bid.count}</div> {/* count */}
                <div>{bid.amount}</div> {/* amount */}
                <div>{bid.amount}</div> {/* total or other relevant value */}
                <div className="price green">{bid.price}</div> {/* price */}
                {/* {asks &&
                  asks.map((ask, i) => {
                    <> */}
                <div class="price red">{bid.price}</div>
                <div>{bid.amount}</div>
                <div>{bid.amount}</div>
                <div>{bid.count}</div>
                {/* </>;
                  })} */}
              </div>
            </div>
          ))}
      </div>
      <div class="footer">
        <span>FULL BOOK</span>
        <span>REAL-TIME</span>
      </div>
    </div>

    // <div className="order-book">
    //   <div className="controls">
    //     <button onClick={increasePrecision}>Increase Precision</button>
    //     <button onClick={decreasePrecision}>Decrease Precision</button>
    //   </div>
    //   {memoizedBids.map((bid, index) => (
    //     <div key={index} className="order">
    //       <span>{bid?.price?.toFixed(precision)}</span>
    //       <span>{bid?.amount?.toFixed(2)}</span>
    //     </div>
    //   ))}
    //   {memoizedAsks.map((bid, index) => (
    //     <div key={index} className="order">
    //       <span>{bid?.price?.toFixed(precision)}</span>
    //       <span>{bid?.amount?.toFixed(2)}</span>
    //     </div>
    //   ))}
    //   <div className="order-book-section">
    //     <h2>Count</h2>
    //     {bids.map((bid) => (
    //       <div className="order">
    //         <span>{bid[0]?.count}</span>
    //       </div>
    //     ))}
    //   </div>
    //   <div className="order-book-section">
    //     <h2>Amount</h2>
    //     {bids.map((bid) => (
    //       <div className="order">
    //         <span>{bid[0]?.amount}</span>
    //       </div>
    //     ))}
    //   </div>
    //   <div className="order-book-section">
    //     <h2>Total</h2>
    //     {bids.map((bid) => (
    //       <div className="order">
    //         <span>{bid[0]?.count}</span>
    //       </div>
    //     ))}
    //   </div>
    //   <div className="order-book-section">
    //     <h2>Price</h2>
    //     {bids.map((bid, index) => (
    //       <div className="order">
    //         <span>{bid[0]?.price}</span>
    //       </div>
    //     ))}
    //   </div>
    //   <div className="order-book-section">
    //     <h2>Count</h2>
    //     {asks.map((bid, index) => (
    //       <div key={index} className="order">
    //         <span>{bid[0]?.count}</span>
    //       </div>
    //     ))}
    //   </div>
    //   <div className="order-book-section">
    //     <h2>Amount</h2>
    //     {asks.map((bid, index) => (
    //       <div key={index} className="order">
    //         <span>{bid[0]?.amount}</span>
    //       </div>
    //     ))}
    //   </div>
    //   <div className="order-book-section">
    //     <h2>Total</h2>
    //     {asks.map((bid, index) => (
    //       <div key={index} className="order">
    //         <span>{bid[0]?.count}</span>
    //       </div>
    //     ))}
    //   </div>
    //   <div className="order-book-section">
    //     <h2>Price</h2>
    //     {asks.map((bid, index) => (
    //       <div key={index} className="order">
    //         <span>{bid[0]?.price}</span>
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
};

export default OrderBook;
