// import selectExpensesTotal from '../../selectors/expenses-total';

export default (expenses) => {
    const amount = expenses.map((expense) => expense.amount);
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    
    return amount.reduce(reducer, 0);
};
