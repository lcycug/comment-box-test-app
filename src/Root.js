import React from "react";
import reducer from "reducers";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise";
import async from "middlewares/async";

export default ({ children, initialState = {} }) => {
  const store = createStore(
    reducer,
    initialState,
    applyMiddleware(promiseMiddleware)
  );
  return <Provider store={store}>{children}</Provider>;
};
