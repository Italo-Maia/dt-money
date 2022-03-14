import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';
import Modal from 'react-modal';
import { useState } from 'react';
import { NewTransactionModal } from './components/NewTrasactionModal';
import { TransactiosProvider } from './hooks/useTransactions';

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionOpen, setIsNewTransactionOpen] = useState(false);

  function handleOpenNewTransactionModal(){
      setIsNewTransactionOpen(true)
  }

  function closeOpenNewTransactionModal(){
      setIsNewTransactionOpen(false)
  }

  return (
    <TransactiosProvider>

      <Header onOpenNewTransactioModal={handleOpenNewTransactionModal} />

      <Dashboard />

      <NewTransactionModal 
      isOpen={isNewTransactionOpen} 
      onRequestClose={closeOpenNewTransactionModal}
       />

      <GlobalStyle />

    </TransactiosProvider>

  );
}


