import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import {ManageCoursePage} from './ManageCoursePage';

describe('Manage Course page', () => {
  it('should set error message when trying to save empty title', () => {
    const props = {
      course: {id:'', watchHref: '', title: '', authorId: '', length: '', category: ''},
      authors: [],
      actions: { saveCourse: () => { return Promise.resolve(); }}
    };

    const wrapper = mount(<ManageCoursePage {...props}/>); //here we use mount instead of shallow,
                                                //becausewe need to render the component with its chils. Shallow renders only one layer deep

    const saveButton = wrapper.find('input').last();
    expect(saveButton.prop('type')).toBe('submit');
    saveButton.simulate('click');
    expect(wrapper.state().errors.title).toBe('Title must be at least 5 characters.');
  });
});
