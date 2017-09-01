import authorApi from '../api/mockAuthorApi';
import * as types from './actionTypes';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadAuthorsSuccess(authors) { //this is an action creator
  return { type: types.LOAD_AUTHORS_SUCCESS, authors}; //== authors: authors
}

//create a first thunk function to load data : async call --> dispatch action --> loadAuthorsSuccess
export function loadAuthors() {
  return dispatch => {
    dispatch(beginAjaxCall());
    return authorApi.getAllAuthors().then(authors => {
      dispatch(loadAuthorsSuccess(authors));
    }).catch(error => {
      dispatch(ajaxCallError());
      throw(error);
    });
  };
}
