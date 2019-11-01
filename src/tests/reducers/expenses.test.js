import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id is not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: -1
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[1], expenses[2]]);
});

test('should add a new expense to the array', () => {
  const newExpense = {
    id: '4',
    description: 'Cola',
    note: 'This is the new expense on the array',
    amount: 499,
    createdAt: moment(0)
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense: newExpense
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[1], expenses[2], newExpense]);
});

//should edit an expense

test('should edit an expense', () => {
  const updates = {
    description: 'LootBoxes',
    amount: 120000
  };
  const action = {
    type: 'EDIT_EXPENSE',
    id: 2,
    updates: updates
  };
  const dummyExpense = {
    ...expenses[1],
    ...updates
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], dummyExpense, expenses[2]]);
});
//should not edit an expense if id does not exists

test('should not edit an expense if id does not exists', () => {
  const updates = {
    description: 'LootBoxes',
    amount: 120000
  };
  const action = {
    type: 'EDIT_EXPENSE',
    id: 5,
    updates: updates
  };
  const dummyExpense = {
    ...expenses[1],
    ...updates
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[1], expenses[2]]);
});
