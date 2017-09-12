import expect from 'expect';
import {authorsFormattedForDropDown} from './selectors';

describe('Author Selectors', () => {
  describe('authorsFormattedForDropdown', () => {
    it('should return author data formatted for use in SelectInput', () => {
      const authors = [
        {id: 'cory-house', firstName: 'Cory', lastName: 'House'},
        {id: 'ali-geha', firstName: 'ali', lastName: 'geha'}
      ];

      const expected = [
        {value: 'cory-house', text:'Cory House'},
        {value: 'ali-geha', text: 'ali geha'}
      ];

      expect(authorsFormattedForDropDown(authors)).toEqual(expected);
    });
  });
});

