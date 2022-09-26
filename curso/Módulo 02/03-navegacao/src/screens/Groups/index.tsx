import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { GroupCard } from '@components/GroupCard';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Container } from './styles';
import { FlatList } from 'react-native';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// type RootParamList = {
//   groups: undefined;
//   new: undefined;
//   players: {
//     group: string;
//   }
// }

// type Props = {
//   navigation: NativeStackNavigationProp<RootParamList, 'groups'>
// }


export function Groups() {
  const [groups, setGroups] = useState([]);
  const navigation = useNavigation();

  function handleNewGroup() {
    navigation.navigate('new');
  }

  return (
    <Container>
      <Header />

      <Highlight 
        title="Turmas" 
        subtitle="Jogue com a sua turma"
      />

      <FlatList 
        data={groups}
        keyExtractor={item => item}
        renderItem={({item}) => <GroupCard title={item} />}
        ListEmptyComponent={() => <ListEmpty message="Que tal cadastrar a primeira turma?" />}
        contentContainerStyle={groups.length === 0 && { flex: 1}}
      />

      <Button 
        text="Criar nova turma"
        onPress={handleNewGroup}
      />
      
    </Container>
  );
}

