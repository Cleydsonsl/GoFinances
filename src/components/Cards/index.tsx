import React from "react";
import { 
  Container,
  Header,
  Title,
  Icon,
  Footer,
  Amout,
  LastTransaction 
} from "./styles";

export function Cards(){

  return(
    <Container>
      <Header>
        <Title>Entrada</Title>
        <Icon name="arrow-up-circle" />
      </Header>

      <Footer>
        <Amout>R$ 14.000,00</Amout>
        <LastTransaction>Última entrada dia 13 de abril</LastTransaction>
      </Footer>
    </Container>
  )
}