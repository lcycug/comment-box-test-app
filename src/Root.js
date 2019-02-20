import React from "react";
import reducer from "reducers";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
// import promiseMiddleware from "redux-promise";
import async from "middlewares/async";
import schemaValidator from "middlewares/schemaValidator";

export default ({ children, initialState = {} }) => {
  const store = createStore(
    reducer,
    initialState,
    applyMiddleware(async, schemaValidator)
  );
  return <Provider store={store}>{children}</Provider>;
};
