import { SAVE_COMMENT, SWITCH_AUTH } from "actions/types";

export const saveComment = comment => {
  return {
    type: SAVE_COMMENT,
    payload: comment
  };
};

export const switchAuth = isLoggedIn => {
  return {
    type: SWITCH_AUTH,
    payload: isLoggedIn
  };
};
