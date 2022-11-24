import {ArrowUpRight} from 'phosphor-react-native';
import { useTheme } from 'styled-components/native';
import { Text } from '../Text';
import { Container, Icon } from './styles';

export function Banner() {
  const theme = useTheme();

  return (
    <Container>
      <Icon>
        <ArrowUpRight color={theme.COLORS['green-dark']} />
      </Icon>

      <Text size={theme.FONT_SIZE['3XL']} weight={theme.FONT_FAMILY.BOLD}>90,86%</Text>
      <Text color={theme.COLORS['gray-2']} size={theme.FONT_SIZE.MD}>das refeições dentro da dieta</Text>
    </Container>
  );
}
