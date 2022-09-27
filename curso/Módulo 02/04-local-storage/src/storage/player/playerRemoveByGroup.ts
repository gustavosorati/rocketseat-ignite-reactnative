import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "@utils/AppError";

import { PLAYER_COLLECTION } from "@storage/storageConfig";

import { PlayerStorageDTO } from './PlayerStorageDTO';
import { playersGetByGroup } from "./playersGetByGroup";

export async function playerRemoveByGroup(playerName: string, group: string) {
  try {

    const storagePlayers = await playersGetByGroup(group);

    const filtered = storagePlayers.filter(player => player.name !== playerName);
    const players = JSON.stringify(filtered)


    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, players);

  } catch (error) {
    throw (error);
  }
}