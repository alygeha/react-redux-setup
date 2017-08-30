import * as types from '../actions/actionTypes';
export default function courseReducer(state = [], action) {
  switch(action.type) {
    case types.CREATE_COURSE:
      return [...state, //object assign + spread operator
      Object.assign({}, action.course)
      ];

    default:
      return state;
  }
}
