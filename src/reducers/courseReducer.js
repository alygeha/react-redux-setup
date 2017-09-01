import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state = initialState.courses, action) {
  switch(action.type) {
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;
    case types.CREATE_COURSE_SUCCESS:
      return [
        ...state, //immutablity: object assign + ES6 spread operator => explode all the values inside the array
        Object.assign({}, action.course)
        ];
    case types.UPDATE_COURSE_SUCCESS:
      return [
        ...state.filter(course => course.id !== action.course.id), //replace the updated course
        Object.assign({}, action.course)
        ];

    default:
      return state;
  }
}
