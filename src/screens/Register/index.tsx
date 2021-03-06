import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Alert, Keyboard, Modal, TouchableWithoutFeedback } from 'react-native';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'

import { Button } from '../../components/Forms/Button';
import { CategorySelectButton } from '../../components/Forms/CategorySelectButton';
import { InputForm } from '../../components/Forms/InputForm';
import { TransactionButton } from '../../components/Forms/TransactionButton';

import { CategorySelect } from '../CategorySelect';

import { Container, Fields, Form, Header, Title, TransactionsTypes } from './styles';

export interface FormData {
  [name: string]: any;
}

const schema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório'),
  amount: Yup.number().typeError('Informe um valor númerico').positive('O valor não pode ser negativo').required('O valor é obrigatório')
})

export function Register() {
  const [transactionType, setTransactionType] = useState('');
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);

  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria'
  });

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

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
    if(!transactionType) {
      return Alert.alert('Selecione o tipo de transação');
    };

    if(category.key === 'category') {
      return Alert.alert('Selecione a categoria');
    }

    const data = { 
      name: form.name,
      amount: form.amount,
      transactionType,
      category: category.key,
    }

    console.log(data)
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
                autoCapitalize='sentences'
                autoCorrect={false}
                error={errors.name && errors.name.message}
              />
              <InputForm 
                name='amount'
                control={control}
                placeholder='Valor'
                keyboardType='numeric'
                error={errors.amount && errors.amount.message}
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
    </TouchableWithoutFeedback>
  )
}