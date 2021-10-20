import React, { useState } from 'react'
import logoImg from '../../assets/logo.svg'
import { Container, Content } from "./styles"
import { NewTransactionModal } from '../NewTransactionModal/index'

export const Header = () => {

    const [isNewTransactionModalOpen, setNewTransactionModalOpen] = useState(false)

    function handleTransactionModalOpen() {
        setNewTransactionModalOpen(true)
    }
    function handleTransactionModalClose() {
        setNewTransactionModalOpen(false)
    }

    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dt money" />
                <button type="button" onClick={handleTransactionModalOpen}>
                    Nova Transação
                </button>
            </Content>
            <NewTransactionModal
                isOpen={isNewTransactionModalOpen}
                onRequestClose={handleTransactionModalClose}
            />
        </Container>
    )
}   