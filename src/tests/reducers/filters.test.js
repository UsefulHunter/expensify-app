import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should setup default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('should set sortBy to amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
  expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
  const currentState = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  };
  const action = { type: 'SORT_BY_DATE' };
  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe('date');
});

// should set text filter
test('should set text filter', () => {
  const someText = '123abc';
  const currentState = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  };
  const action = { type: 'SET_TEXT_FILTER', text: someText };
  const state = filtersReducer(currentState, action);
  expect(state.text).toBe(someText);
});

// should set startDate filter
test('should set startDate filter', () => {
  const someDate = moment(0);
  const currentState = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  };
  const action = { type: 'SET_START_DATE', startDate: someDate };
  const state = filtersReducer(currentState, action);
  expect(state.startDate).toBe(someDate);
});
//should set endDate filter
test('should set endDate filter', () => {
  const someDate = moment(1);
  const currentState = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  };
  const action = { type: 'SET_END_DATE', endDate: someDate };
  const state = filtersReducer(currentState, action);
  expect(state.endDate).toBe(someDate);
});
