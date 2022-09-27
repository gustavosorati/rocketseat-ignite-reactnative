import AsyncStorage from '@react-native-async-storage/async-storage'
import { GROUP_COLLECTION, PLAYER_COLLECTION } from '@storage/storageConfig';
import { groupGetAll } from './groupsGetAll';

export async function groupRemoveByName(groupDeleted: string) {
  try {

    const storedGroups = await groupGetAll();

    const filtered = storedGroups.filter(group => group !== groupDeleted);

    const storage = JSON.stringify(filtered);
    
    await AsyncStorage.setItem(GROUP_COLLECTION, storage);
    await AsyncStorage.clear()
    
  } catch (error) {
    throw error;
  }
}