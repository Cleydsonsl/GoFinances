import React from "react";
import { Cards } from "../../components/Cards";
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
  Title } from "./styles";

export function Dashboard() {
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

      <Transaction>
        <Title>Listagem</Title>
      </Transaction>
    </Container>
  )
}