import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import { EditExpensePage } from '../../components/EditExpensePage';

let startEditExpense, startRemoveExpense, history, wrapper;

beforeEach(() => {
    startEditExpense = jest.fn();
    startRemoveExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(
        <EditExpensePage
            startEditExpense={startEditExpense}
            startRemoveExpense={startRemoveExpense}
            history={history}
            expense={expenses[2]}
        />
    );
});

test('should render EditExpensePage', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle startEditExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startEditExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
});

test('should handle startRemoveExpense', () => {
    const confModal = true;
    wrapper.find('button').simulate('click');
    expect(wrapper.state('confModal')).toBe(confModal);
    // wrapper.find('ConfirmationModal').prop('confModal')(confModal);
    // expect(history.push).toHaveBeenLastCalledWith('/');
    // expect(startRemoveExpense).toHaveBeenLastCalledWith({
    //     id: expenses[2].id
    // });

    
});

test('should handle confirmation modal state', () => {
    const confModal = false;
    wrapper.find('ConfirmationModal').prop('handleClearModal')(confModal);
    expect(wrapper.state('confModal')).toBe(confModal);
});

test('should remove expense on confirmation button click', () => {
    const confModal = undefined
    wrapper.find('ConfirmationModal').prop('handleAcceptModal')(confModal);
    expect(wrapper.state('confModal')).toBe(confModal);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startRemoveExpense).toHaveBeenLastCalledWith({
        id: expenses[2].id
    });
});