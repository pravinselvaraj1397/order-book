import { configureStore } from "@reduxjs/toolkit";

import sessionTimeout from "../redux/sessionTimeout.slice";
import logger from "redux-logger";
import themeModeSlice from "./themeMode.slice";
import getDtcListSlice from "./faultManagementRedux/dtcList.slice";
import isHeaderDetailsShowSlice from "./headerRedux/isHeaderDetailsShow.slice";
import isFreezeSlice from "./isFreeze.slice";

import getHeaderDataSlice from "./headerRedux/headerData.slice";

const store = configureStore({
  reducer: {
    sessionTimeout: sessionTimeout.reducer,
    themeModeSlice: themeModeSlice.reducer,
    isHeaderDetailsShowSlice: isHeaderDetailsShowSlice.reducer,
    getHeaderDataSlice: getHeaderDataSlice.reducer,
    isFreezeSlice: isFreezeSlice.reducer,
    getDtcListSlice: getDtcListSlice.reducer,
  },
  middleware: [logger],
});

export default store;
