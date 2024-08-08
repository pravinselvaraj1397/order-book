import React, { memo } from "react";
import PropTypes from "prop-types";
import { Book } from "@ufx-ui/core";

import { getRowMapping, getBookViz } from "./OrderBook.helpers";
import "./style.css";

// Temporary restriction to suit the design mockups;
// Remove once the design can handle deep OBs
const TEMP_OB_SIDE_LENGTH_LIMIT = 12;

const OrderBook = ({ sumAmounts, stackedView, ...rest }) => {
  const rowMapping = getRowMapping(sumAmounts);
  const bookViz = getBookViz(sumAmounts);

  return (
    <Book
      className="ui-orderbook"
      rowMapping={rowMapping}
      isStackedView={stackedView}
      bookViz={bookViz}
      numberOfRows={TEMP_OB_SIDE_LENGTH_LIMIT}
      {...rest}
    />
  );
};

OrderBook.propTypes = {
  sumAmounts: PropTypes.bool,
  stackedView: PropTypes.bool,
};
OrderBook.defaultProps = {
  sumAmounts: true,
  stackedView: true,
};

export default memo(OrderBook);
