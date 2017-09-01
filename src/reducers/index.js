import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({ //we exposed the courseRreducer as a part of the store called "courses"
  courses,
  authors,
  ajaxCallsInProgress
}); //short hand property name, courses ==> courses:courses

export default rootReducer;
