import {combineReducers} from 'redux';
import courses from './courseReducer';

const rootReducer = combineReducers({ //we exposed the courseRreducer as a part of the store called "courses"
  courses
}); //short hand property name, courses ==> courses:courses

export default rootReducer;
