import { ButtonIcon } from '@components/ButtonIcon';
import { TouchableOpacityProps } from 'react-native'
import { Name, Container, Icon } from "./styles";

type Props = {
  name: string;
}

export function PlayerCard({ name }: Props) {
  return (
    <Container>
      <Icon name="person" />
      <Name>{name}</Name>

      <ButtonIcon
        icon='close'
        type='SECONDARY'
      />
    </Container>
  )
}