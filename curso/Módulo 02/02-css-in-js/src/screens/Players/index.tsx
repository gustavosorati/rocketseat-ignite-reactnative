import { Button } from "@components/Button";
import { ButtonIcon } from "@components/ButtonIcon";
import { Filter } from "@components/Filter";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { Container, Form, Icon } from "./styles";


export function Players() {
  return (
    <Container>
      <Header showBackButton />

        <Icon />

        <Highlight
          title="Nome da turma"
          subtitle="Adicione a galera e separe os times"
        /> 

        <Form>
          <Input 
            placeholder="Nome do participante"
            autoCorrect={false}
          />

          <ButtonIcon
            icon="add"
          />
        </Form>

        <Filter 
          title="Time A" 
          isActive 
        />
    </Container>
  )
}