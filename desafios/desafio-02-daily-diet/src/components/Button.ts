import styled from 'styled-components/native';

export const Button = styled.TouchableOpacity`
  width: 100%;
  background-color: ${({theme}) => theme.COLORS['gray-2']};
  padding: 16px 24px;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  flex-direction: row;
`;
