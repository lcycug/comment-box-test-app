import tv4 from "tv4";
import rules from "middlewares/stateSchema";

export default ({ dispatch, getState }) => next => action => {
  next(action); // execute action first, validate then
  debugger;
  if (!tv4.validate(getState(), rules)) {
    console.warn("Invalid schema detected!");
  }
};
