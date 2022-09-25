import { TouchableOpacityProps } from 'react-native'
import { ButtonTypeStyleProps, Container, Title } from "./styles";

type Props = TouchableOpacityProps & {
  text: string;
  type?: ButtonTypeStyleProps;
}

export function Button({type = "PRIMARY", text, ...rest}: Props) {
  return (
    <Container type={type} {...rest}>
      <Title>{text}</Title>
    </Container>
  )
}