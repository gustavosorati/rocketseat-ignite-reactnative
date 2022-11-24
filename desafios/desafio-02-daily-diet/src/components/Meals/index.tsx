import { useTheme } from 'styled-components/native';
import { Meal } from './Meal';
import { Text } from '../Text';
import { Container, MealsContainer } from './styles';
import mealsMock from '../../mock/Meals';
import { FlatList } from 'react-native';
import { NewMeal } from './NewMeal';


export function Meals() {
  const theme = useTheme();
  return (
    <Container>
      <Text color={theme.COLORS['gray-1']}>Refeições</Text>

      <NewMeal />

      <MealsContainer>
        <FlatList
          data={mealsMock}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({ item: meals }) => (
            <>
              <Text weight={theme.FONT_FAMILY.BOLD} size={theme.FONT_SIZE.XL}>{meals.data}</Text>
              <FlatList
                data={meals.items}
                keyExtractor={(item) => `${Math.random()}-${item.title}`}
                style={{ marginTop: 4, marginBottom: 32 }}
                renderItem={({ item: meal }) => (
                  <Meal name={meal.title} time={meal.data} status={meal.status} />
                )}
                showsVerticalScrollIndicator={false}
              />
            </>
          )}
          showsVerticalScrollIndicator={false}
        />
      </MealsContainer>

    </Container>
  );
}
