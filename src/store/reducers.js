import { combineReducers } from "redux";

// Example reducer
const counterReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
      };
    case "INCREMENTSYNC":
      return {
        ...state,
        count: state.count + 1,
      };
    default:
      return state;
  }
};

export function increment() {
  return {
    type: "INCREMENT",
  };
}

export function incrementSync() {
  return function (dispatch) {
    setTimeout(() => {
      dispatch(increment());
    }, 1000);
  };
}

// Combine reducers
const rootReducer = combineReducers({
  counter: counterReducer,
});

export default rootReducer;
