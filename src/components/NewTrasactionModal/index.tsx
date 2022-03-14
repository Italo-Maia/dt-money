import Modal from 'react-modal';

import closeImage from '../../assets/close.svg'
import incomeImage from '../../assets/income.svg'
import outcomeImage from '../../assets/outcome.svg'
import { FormEvent, useState, useContext } from 'react';

import { Container, TransactionTypeContainer, RadioBox } from './style';
import { useTransactions } from '../../hooks/useTransactions';

type ModalProps = {
    isOpen: boolean,
    onRequestClose: () => void
}

export function NewTransactionModal({ isOpen, onRequestClose }: ModalProps) {
    const { createTransaction } = useTransactions();

    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState(0)
    const [category, setCategory] = useState('')
    const [type, setType] = useState('deposit')

    async function handleCreateNewTransiction (event: FormEvent){
        event.preventDefault()

        await createTransaction({
            title,
            amount,
            category,
            type,
        })

        setTitle('');
        setAmount(0);
        setCategory('');
        setType('deposit')

        onRequestClose();
    }

    return (
        <Modal isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className='react-modal-content'
        >

            <button type='button'
                onClick={onRequestClose}
                className='react-modal-close'>
                <img src={closeImage} alt="Fechar Modal" />
            </button>

            <Container onSubmit={handleCreateNewTransiction}>
                <h2>Cadastrar Transação</h2>

                <input type="text"
                    placeholder='Título'
                    value={title}
                    onChange={ event => setTitle(event.target.value) } 
                />

                <input type="number"
                    placeholder='Valor'
                    value={amount}
                    onChange={ event => setAmount(Number(event.target.value))} 
                 />

                <TransactionTypeContainer>
                    <RadioBox
                        type='button'
                        onClick={() => { setType('deposit') }}
                        isActive={type === 'deposit'}
                        activeColor="green"
                    >
                        <img src={incomeImage} alt="Entrada" />
                        <span>Entrada</span>

                    </RadioBox>

                    <RadioBox
                        type='button'
                        onClick={() => { setType('withdraw') }}
                        isActive={type === 'withdraw'}
                        activeColor="red"
                    >
                        <img src={outcomeImage} alt="Entrada" />
                        <span>Saída</span>
                    </RadioBox>

                </TransactionTypeContainer>

                <input type="text"
                    placeholder='Categoria'
                    value={category}
                    onChange={ event => setCategory(event.target.value)} 
                 />

                <button type='submit'>Cadastrar</button>

            </Container>
        </Modal>
    )
}

