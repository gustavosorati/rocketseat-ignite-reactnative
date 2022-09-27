import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Container, Content, Icon } from "./styles";


export function NewGroup() {
  const [group, setGroup] = useState('');

  const navigation = useNavigation();

  function handleNew(){
    navigation.navigate('players', { group: group})
  }

  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />

        <Highlight
          title="Nova turma"
          subtitle="Crie a turma para adicionar as pessoas"
        /> 

        <Input 
          placeholder="Nome da turma"
          onChangeText={(text) => setGroup(text)}
        />

        <Button
           text="Criar"
           style={{marginTop: 20}}
           onPress={handleNew}
        />
      </Content>
    </Container>
  )
}