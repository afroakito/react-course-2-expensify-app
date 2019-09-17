import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';
import ConfirmationModal from './ConfirmationModal';

export class EditExpensePage extends React.Component {
    state = {
        confModal: undefined
    }
    onSubmit = (expense) => {
        this.props.startEditExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    };
    handleClearModal = () => {
        this.setState(() => ({ confModal: false }));
    };
    handleAcceptModal = () => {
        this.props.startRemoveExpense({ id: this.props.expense.id });
        this.props.history.push('/');
        this.setState(() => ({ confModal: undefined }));
    };
    onRemove = () => {
        this.setState(() => ({ confModal: true }));
    };

    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Expense</h1>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm
                        expense={this.props.expense}
                        onSubmit={this.onSubmit}
                    />
                    <button className="button button--secondary" onClick={this.onRemove}>Remove Expense</button>
                </div>
                <ConfirmationModal confModal={this.state.confModal} handleClearModal={this.handleClearModal} handleAcceptModal={this.handleAcceptModal}/>
            </div>
        );
    }
};

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
    startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);