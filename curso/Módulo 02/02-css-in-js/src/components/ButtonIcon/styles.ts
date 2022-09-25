import styled, { css } from "styled-components/native";
import { MaterialIcons } from '@expo/vector-icons'

export type ButtonIconTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: ButtonIconTypeStyleProps;
}

export const Container = styled.TouchableOpacity<Props>`
  min-height: 56px;
  max-height: 56px;

  justify-content: center;
  align-items: center;

  margin-left: 12px;
  margin-right: 12px;
`;

export const Icon = styled(MaterialIcons).attrs<Props>(({theme, type}) => ({
  size: 24,
  color: type === 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.RED
}))``;