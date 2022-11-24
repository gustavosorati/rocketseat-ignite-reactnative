import { useTheme } from 'styled-components/native';
import { Text } from '../../Text';
import { Container, Left, Separator, Status } from './styles';

interface Props {
  time: string;
  name: string;
  status: boolean;
}

export function Meal({time, name, status}: Props) {
  const theme = useTheme();

  return (
    <Container>
      <Left>
        <Text size={theme.FONT_SIZE.SM} weight={theme.FONT_FAMILY.BOLD}>{time}</Text>
        <Separator />
        <Text color={theme.COLORS['gray-2']}>{name}</Text>
      </Left>

      <Status status={status} />
    </Container>
  );
}
