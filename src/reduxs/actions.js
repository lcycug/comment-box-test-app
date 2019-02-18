export const comments = (state = [], action) => {
  if (action.type === "ADD") {
    return [...state, action.content];
  }
  return state;
};
