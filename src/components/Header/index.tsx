import { useState } from 'react'
import logo from '../../assets/logo.svg'
import { Container, Content } from './styles'

type HeaderProps= {
    onOpenNewTransactioModal: () => void;
}

export function Header({ onOpenNewTransactioModal } : HeaderProps) {
    return (

        <Container>
            <Content>
            <img src={logo} alt="dt money" />
            <button type="button" onClick={ onOpenNewTransactioModal }> Nova transação </button>
            </Content>

        </Container>

    )
} 