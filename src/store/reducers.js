import { combineReducers } from "redux";
import { takeEvery, put, delay } from "redux-saga/effects";

// Example reducer
const counterReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
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

export function incrementSync(){
  return {
    type: 'INCREMENTSYNC'
  }
}



function *incrementSyncSagaHandler(){
  yield put({type:"INCREMENTSYNC_START"});
  yield delay(1000);
  yield put(increment());
  yield put({type:"INCREMENTSYNC_END"});
}

export function *incrementSyncSaga(){
  yield takeEvery("INCREMENTSYNC", incrementSyncSagaHandler);
}

    
// Combine reducers
const rootReducer = combineReducers({
  counter: counterReducer,
});

export default rootReducer;
