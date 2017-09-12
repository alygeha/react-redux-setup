import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/index'; //we need to connect the Store to combined reducers, so each reducer will take its place in the state
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';


export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, reduxImmutableStateInvariant())
  );
}
