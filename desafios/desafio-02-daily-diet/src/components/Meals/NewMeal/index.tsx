import { Plus } from 'phosphor-react-native';
import { useTheme } from 'styled-components/native';
import { Button } from '../../Button';
import { Text } from '../../Text';

export function NewMeal() {
  const theme = useTheme();

  return (
    <Button style={{ marginTop: 8, marginBottom: 32 }}>
      <Plus color={theme.COLORS.white} size={18} style={{ marginRight: 8}} />

      <Text
        color={theme.COLORS.white}
        size={theme.FONT_SIZE.MD}
        weight={theme.FONT_FAMILY.BOLD}
      >Navegação</Text>
    </Button>
  );
}
