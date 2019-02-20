export default ({ dispatch }) => next => action => {
  if (!action.payload || !action.payload.then) {
    return next();
  }
  action.payload.then(response => {
    dispatch({ ...action, payload: response });
  });
};
