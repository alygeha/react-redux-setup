import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadCoursesSuccess(courses) { //this is an action creator
  return { type: types.LOAD_COURSES_SUCCESS, courses}; //== courses: courses
}

export function updateCourseSuccess(course) {
  return { type: types.UPDATE_COURSE_SUCCESS, course};
}

export function createCourseSuccess(course) {
  return { type: types.CREATE_COURSE_SUCCESS, course};
}

//create a first thunk function to load data : async call --> dispatch action --> loadCoursesSuccess
export function loadCourses() {
  return function(dispatch) {
    dispatch(beginAjaxCall()); //dispatch the call to ajaxStatusActions so that the reducer increment his state
    return courseApi.getAllCourses().then(courses => {
      dispatch(loadCoursesSuccess(courses));
    }).catch(error => {
      dispatch(ajaxCallError());
      throw(error);
    });
  };
}


//thunk saveCourse
export function saveCourse(course) {
return function(dispatch, getState) { //getState is an optional param that allows to access the Redux store and get some particular pieces of state
  dispatch(beginAjaxCall());
  return courseApi.saveCourse(course).then(savedCourse => {
      course.id ? dispatch(updateCourseSuccess(savedCourse)) : dispatch(createCourseSuccess(savedCourse));
    }).catch(error => {
      dispatch(ajaxCallError());
      throw(error);
    });
  };
}


