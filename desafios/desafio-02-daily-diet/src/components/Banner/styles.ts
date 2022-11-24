import styled from 'styled-components/native';


export const Container = styled.View`
  background-color: ${({theme}) => theme.COLORS['green-light']};
  width: 100%;
  min-height: 102px;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
`;

export const Icon = styled.TouchableOpacity`
  position: absolute;
  top: 10px;
  right: 10px;
  border-radius: 8px;
`;


