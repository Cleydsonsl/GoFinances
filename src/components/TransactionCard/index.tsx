import React from 'react'
import { 
  Container,
  Title,
  Amout,
  Footer,
  Category,
  Icon,
  CategoryName,
  Date
} from './styles'

export function TransactionCard() {
  return(
    <Container>
      <Title>Desenvolvimento de site</Title>

      <Amout>R$ 12.00,00</Amout>

      <Footer>
        <Category>
          <Icon name="dollar-sign"/>
          <CategoryName>Vendas</CategoryName>
        </Category>
        <Date>07/04/2022</Date>
      </Footer>

    </Container>
  )
}