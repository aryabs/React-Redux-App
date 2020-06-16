import {
    combineReducers,
    createStore,
  } from 'redux';
  
  // actions.js
  export const activated = val => ({
    type: 'ACTIVATE_val',
    val,
  });
  
  export const closed = () => ({
    type: 'CLOSE_val',
  });
  
  // reducers.js
  export const val = (state = {}, action) => {
    switch (action.type) {
      case 'ACTIVATE_val':
        return action.val;
      case 'CLOSE_val':
        return {};
      default:
        return state;
    }
  };
  
  export const reducers = combineReducers({
    val,
  });
  
  // store.js
  export function configureStore(initialState = {}) {
    const store = createStore(reducers, initialState);
    return store;
  };
  
  export const store = configureStore();