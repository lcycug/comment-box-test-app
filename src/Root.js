import React from "react";
import reducer from "reducer";
import { Provider } from "react-redux";
import { createStore } from "redux";

export default ({ children, initialState = {} }) => {
  const store = createStore(reducer, initialState);
  return <Provider store={store}>{children}</Provider>;
};
