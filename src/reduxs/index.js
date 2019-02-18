import { createStore } from "redux";
import { comments } from "reduxs/actions";

export const store = createStore(comments);

store.subscribe(() => {
  console.log(store.getState());
});
