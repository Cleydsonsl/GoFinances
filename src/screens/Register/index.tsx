import React, { useState } from 'react';
import { Button } from '../../components/Forms/Button';
import { Input } from '../../components/Forms/Input';
import { TransactionButton } from '../../components/Forms/TransactionButton';

import { Container, Fields, Form, Header, Title, TransactionsTypes } from './styles';

export function Register() {
  const [transactionType, setTransactionType] = useState('');

  function handleTransactionTypeSelect(type: 'up' | 'down'){
    setTransactionType(type);
  }

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>
      
      <Form>
        <Fields>
          <Input placeholder='Nome'/>
          <Input placeholder='Nome'/>
          <TransactionsTypes>
            <TransactionButton
              type='up'
              title='Income'
              onPress={() => handleTransactionTypeSelect('up')}
              isActive={transactionType === 'up'}
            />
            <TransactionButton
              type='down'
              title='Outcome'
              onPress={() => handleTransactionTypeSelect('down')}
              isActive={transactionType === 'down'}
            />
          </TransactionsTypes>
        </Fields>
        

        <Button title='ENVIAR'/>
      </Form>
    </Container>
  )
}