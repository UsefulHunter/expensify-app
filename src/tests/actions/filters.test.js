import moment from 'moment';
import {
  setStartDate,
  setEndDate,
  setTextFilter,
  sortByDate,
  sortByAmount
} from '../../actions/filters';

test('should generate set start date action object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  });
});
/*test('should generate set start date as undefined action object, if no argument is passed', () => {
  const action = setStartDate();
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: undefined
  });
});*/

test('should generate set end date action object', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  });
});

/*test('should generate set end date as undefined action object, if no argument is passed', () => {
  const action = setEndDate();
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: undefined
  });
});*/

test('should generate set text filter action object', () => {
  const text = 'Something';
  const action = setTextFilter(text);
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text
  });
});

test('should generate set empty text filter action object', () => {
  expect(setTextFilter()).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});

test('should generate sort by date type', () => {
  expect(sortByDate()).toEqual({
    type: 'SORT_BY_DATE'
  });
});

test('should generate sort by amount type', () => {
  expect(sortByAmount()).toEqual({
    type: 'SORT_BY_AMOUNT'
  });
});
