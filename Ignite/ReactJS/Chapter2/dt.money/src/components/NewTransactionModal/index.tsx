import Modal from 'react-modal'

interface newTransactionModalProps {
    isOpen: boolean,
    onRequestClose: () => void;
}

export function NewTransactionModal ({isOpen, onRequestClose}: newTransactionModalProps){

    return(
        <Modal
                isOpen={isOpen}
                onRequestClose={onRequestClose}
                contentLabel="Example Modal"
            >
                <h2>Cadastro de transação</h2>
            </Modal>
    )
}