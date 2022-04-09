import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Modal } from 'react-native';

import { Button } from '../../components/Forms/Button';
import { CategorySelectButton } from '../../components/Forms/CategorySelectButton';
import { InputForm } from '../../components/Forms/InputForm';
import { TransactionButton } from '../../components/Forms/TransactionButton';

import { CategorySelect } from '../CategorySelect';

import { Container, Fields, Form, Header, Title, TransactionsTypes } from './styles';

interface FormData {
  name: string;
  amount: string;
}

export function Register() {
  const [transactionType, setTransactionType] = useState('');
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);

  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria'
  });

  const { control, handleSubmit } = useForm();

  function handleTransactionTypeSelect(type: 'up' | 'down'){
    setTransactionType(type);
  };

  function handleOpenSelectCategory(){
    setCategoryModalOpen(true)
  };

  function handleCloseSelectCategory(){
    setCategoryModalOpen(false)
  };

  function handleRegister(form: FormData) {
    const data = { 
      name: form.name,
      amount: form.amount,
      transactionType,
      category: category.key
    }

    console.log(data)
  }

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>
      
      <Form>
        <Fields>
          <InputForm 
            name='name'
            control={control}
            placeholder='Nome'
          />
          <InputForm 
            name='amount'
            control={control}
            placeholder='Valor'
          />

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

          <CategorySelectButton
            title={category.name}
            onPress={handleOpenSelectCategory}
          />
        </Fields>
        <Button 
          title='ENVIAR'
          onPress={handleSubmit(handleRegister)}
        />
      </Form>

      <Modal visible={categoryModalOpen}>
        <CategorySelect
          category={category}
          setCategory={setCategory}
          closeSelectCategory={handleCloseSelectCategory}
        />
      </Modal>
    </Container>
  )
}