import { useState } from 'react';
import { GroupCard } from '@components/GroupCard';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Container } from './styles';
import { FlatList } from 'react-native';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';

export function Groups() {
  const [groups, setGroups] = useState([]);

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
      />
      
    </Container>
  );
}

