import { SWITCH_AUTH } from "actions/types";

export default (state = false, action) => {
  switch (action.type) {
    case SWITCH_AUTH:
      return action.payload;
    default:
      return state;
  }
};
