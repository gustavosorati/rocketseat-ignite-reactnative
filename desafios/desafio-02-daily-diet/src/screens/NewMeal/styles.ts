import { Platform, StatusBar } from 'react-native';
import styled from 'styled-components/native';

const isAndroid = Platform.OS === 'android';

export const Container = styled.SafeAreaView`
  margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : 0};
  padding: 0 24px;
  flex: 1;
`;

export const InlineContainer = styled.View`
  flex-direction: row;
`;

export const Item = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  margin-bottom: 8px;
  font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
`;

interface InputProps {
  multiline?: boolean;
}

export const Input = styled.TextInput<InputProps>`
  width: 100%;
  border: 1px solid ${({theme}) => theme.COLORS['gray-5']};
  padding: 8px 16px;
  margin-bottom: 24px;
  border-radius: 6px;

  textAlignVertical: ${({multiline}) => multiline ? 'top' : 'center' }
`;

export const Button = styled.Pressable`
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;

  height: 50px;
  background-color: ${({theme}) => theme.COLORS['gray-5']};
  border-radius: 6px;
`;

interface CircleProps {
  color: 'green' | 'red';
}

export const Circle = styled.View<CircleProps>`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: ${({theme, color}) => color === 'green' ? theme.COLORS['green-dark'] : theme.COLORS['red-dark']};
  margin-right: 8px;
`;
