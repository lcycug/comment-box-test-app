import { SAVE_COMMENT, SWITCH_AUTH, FETCH_COMMENTS } from "actions/types";
import axios from "axios";

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

export const fetchComments = () => {
  const response = axios.get("https://jsonplaceholder.typicode.com/comments");
  return {
    type: FETCH_COMMENTS,
    payload: response
  };
};
