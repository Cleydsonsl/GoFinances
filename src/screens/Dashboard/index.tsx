import React from "react";

import { Cards } from "../../components/Cards";
import { TransactionCard, TransactionCardProps } from "../../components/TransactionCard";

import { 
  Container, 
  Header, 
  UserInfo, 
  Image, 
  User, 
  UserGreeting, 
  UserName, 
  UserContainer, 
  Icon,
  CardsContent,
  Transaction,
  Title, 
  TransactionList,
  StyleCarrousel} from "./styles";

  export interface DataListProps extends TransactionCardProps {
    id: string;
  }

export function Dashboard() {
  const data: DataListProps[] = [  
    {
      id: '1',
      type: 'positive',
      title: "Desenvolvimento de Site",
      amout: "R$ 12.200,00",
      category: {
        name: 'vendas',
        icon: 'dollar-sign'
      },
      date: "07/04/2022"
    },
    {
      id: '2',
      type: 'negative',
      title: "Pizza",
      amout: "R$ 2.200,00",
      category: {
        name: 'Alimentacao',
        icon: 'coffee'
      },
      date: "07/04/2022"
    },
    {
      id: '3',
      type: 'positive',
      title: "Aluguel do apartamento",
      amout: "R$ 12.200,00",
      category: {
        name: 'Casa',
        icon: 'shopping-bag'
      },
      date: "07/04/2022"
    },
  ]

  return (
    <Container>
      <Header>
        <UserContainer>
          <UserInfo>
            <Image source={{ uri: 'https://avatars.githubusercontent.com/u/55638843?v=4' }}/>
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Emanuel Souza</UserName>
            </User>
          </UserInfo>
          <Icon name="power" />
        </UserContainer>
      </Header>

      <CardsContent>
        <Cards
          type="up"
          title="Entradas"
          amout="R$ 17.400,00"
          lastTransaction="Ultima entrada dia 13 de abril"
        />
        <Cards 
          type="down"
          title="Saidas"
          amout="R$ 1.400,00"
          lastTransaction="Ultima saida 03 de abril"
        />
        <Cards 
          type="total"
          title="Entradas"
          amout="R$ 16.000,00"
          lastTransaction="01 a 16 de abril"
        />
      </CardsContent>

      {/* <StyleCarrousel
        data={data}
        renderItem={
          ({item}) => item(
            <Cards
            type="up"
            title="Entradas"
            amout="R$ 17.400,00"
            lastTransaction="Ultima entrada dia 13 de abril"
          />
          )
        }
      ></StyleCarrousel> */}
        
      <Transaction>
        <Title>Listagem</Title>

        <TransactionList 
          data={data}
          keyExtractor={item => item.id}
          renderItem={ ({ item }) => <TransactionCard data={item} /> }
        />
      </Transaction>
    </Container>
  )
}