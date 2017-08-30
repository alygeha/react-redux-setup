import * as types from './actionTypes';
export function createCourse(course) { //this is an action creator
  return { type: types.CREATE_COURSE, course}; //== course: course
}
