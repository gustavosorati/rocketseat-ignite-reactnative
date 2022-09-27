import { playersGetByGroup } from "./playersGetByGroup";

export async function playerGetByGroupAndTeam(group: string, team: string) {
  try {

    const storagePlayers = await playersGetByGroup(group);

    const players = storagePlayers.filter(player => player.team === team);

    return players;
  } catch (error) {
    throw (error);
  }
}