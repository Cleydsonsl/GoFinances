import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
`;

export const Error = styled.Text`
  color: ${({ theme }) => theme.colors.red};
  font-size: ${RFValue(11)}px;
  font-family: ${({ theme }) => theme.fonts.regular};

  margin: 7px 0;
`