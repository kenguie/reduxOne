"use strict"
import {createStore} from 'redux';

// Step 3 define reducers
const reducer = (state=0, action) => {
  switch(action.type) {
    case "INCREMENT":
      return state + action.payload;
      break;
    case "DECREMENT":
      return state - action.payload;
      break;
  }
  return state;
}

// Step 1 create the store
const store = createStore(reducer);

store.subscribe(() => {
  console.log(`current state is: ${store.getState()}`);
});

// Step 2 create and dispatch actions
store.dispatch({type:"INCREMENT", payload: 1});
store.dispatch({type:"INCREMENT", payload: 1});
store.dispatch({type:"DECREMENT", payload: 1});