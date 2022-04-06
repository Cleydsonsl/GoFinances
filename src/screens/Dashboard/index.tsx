import React from "react";
import { 
  Container, 
  Header, 
  UserInfo, 
  Image, 
  User, 
  UserGreeting, 
  UserName, 
  UserContainer, 
  Icon} from "./styles";

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
    </Container>
  )
}