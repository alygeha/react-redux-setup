import expect from 'expect';
import { createStore } from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import * as courseActions from '../actions/courseActions';

//this is an integration test for the store.
describe('Store', () => {
  it('Should handle creating courses', () => {
    //arrange
    const store = createStore(rootReducer, initialState);
    const course = {
      title: 'Clean Code'
    };

    //act
    const action = courseActions.createCourseSuccess(course);
    store.dispatch(action); //we can for example dispath multiple actions here and test on reult

    //assert
    const actual = store.getState().courses[0];
    const expected = {
      title: 'Clean Code'
    };
    expect(actual).toEqual(expected);
  });
});
