import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';
import moment from 'moment';

const singleExpenses = [{
    id: '4',
    description: 'Phone',
    note: '',
    amount: 101100,
    createdAt: moment(0).add(6, 'days')
}]

test('should return 0 if no expenses', () => {
    const result = selectExpensesTotal([]);
    expect(result).toBe(0);
});

test('should correctly add up single expense', () => {
    const result = selectExpensesTotal(singleExpenses);
    expect(result).toBe(101100);
});

test('should correctly add up multiple expenses', () => {
    const result = selectExpensesTotal(expenses);
    expect(result).toBe(114195);
});