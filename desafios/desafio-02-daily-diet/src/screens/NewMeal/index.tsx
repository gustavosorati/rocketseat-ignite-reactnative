import { Text } from '@components/Text';
import { TouchableOpacity } from 'react-native';
import { useTheme } from 'styled-components/native';
import * as Styled from './styles';


export function NewMeal() {
  const theme = useTheme();

  return (
    <Styled.Container>
      <Styled.Title>Nome</Styled.Title>
      <Styled.Input />

      <Styled.Title>Descrição</Styled.Title>
      <Styled.Input
        multiline
        numberOfLines={5}
      />

      <Styled.InlineContainer>
        <Styled.Item style={{ marginRight: 16}}>
          <Styled.Title>Data</Styled.Title>
          <Styled.Input />
        </Styled.Item>

        <Styled.Item style={{ marginLeft: 16}}>
          <Styled.Title>Hora</Styled.Title>
          <Styled.Input />
        </Styled.Item>
      </Styled.InlineContainer>

      <Styled.Title>Está dentro da dieta?</Styled.Title>
      <Styled.InlineContainer>

        <Styled.Item style={{ marginRight: 16}}>

          <Styled.Button onPress={() => alert('Your choice: ')}>
            <Styled.Circle color='green' />
            <Text weight={theme.FONT_FAMILY.BOLD} size={theme.FONT_SIZE.MD}>Sim</Text>
          </Styled.Button>
        </Styled.Item>

        <Styled.Item style={{ marginLeft: 16}}>
          <Styled.Button>
            <Styled.Circle color='red' />
            <Text weight={theme.FONT_FAMILY.BOLD} size={theme.FONT_SIZE.MD}>Não</Text>
          </Styled.Button>
        </Styled.Item>
      </Styled.InlineContainer>

    </Styled.Container>
  );
}
