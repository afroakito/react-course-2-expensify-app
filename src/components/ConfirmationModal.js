import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('body');

const ConfirmationModal = (props) => (
    <Modal
        isOpen={props.confModal}
        onRequestClose={props.handleClearModal}
        contentLabel='Confirmation'
        closeTimeoutMS={200}
        className="modal"
    >
        <h3 className="modal__title">Do you actually want to delete this expense?</h3>
        <div className="modal__button-wrapper">
            <button className="button accept" onClick={props.handleAcceptModal}>Okay</button>
            <button className="button reject" onClick={props.handleClearModal}>No</button>
        </div>
    </Modal>
);

export default ConfirmationModal;