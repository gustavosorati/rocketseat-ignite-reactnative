import { Image } from "react-native";
import { Container, Image as ImageUser } from "./styles";

export function Header() {
  return (
    <Container>
      <Image source={require('../../assets/logo.svg')} />
      <ImageUser source={require('../../assets/user.png')} />
    </Container>
  )
}
