import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#app');

const ConfirmationModal = (props) => (
    <Modal
        isOpen={props.confModal}

        contentLabel='Confirmation'
        closeTimeoutMS={200}
    >
        <h3 className="modal__title">Do you actually want to delete this expense?</h3>
        <button onClick={props.handleAcceptModal}>Okay</button>
        <button onClick={props.handleClearModal}>No</button>
    </Modal>
);

export default ConfirmationModal;