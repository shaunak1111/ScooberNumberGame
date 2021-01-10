import { generateRandNum } from "../common/util";
import { PlayerType } from "../interface";
import { PLAYER_MAIN_ADD_NUMBER, PLAYER_MAIN_UPDATE_CONNECTION, PLAYER_MAIN_UPDATE_HAS_WON, PLAYER_MAIN_UPDATE_NUM_SELECTED, PLAYER_SECONDARY_ADD_NUMBER, PLAYER_SECONDARY_UPDATE_CONNECTION,PLAYER_SECONDARY_UPDATE_HAS_WON,PLAYER_SECONDARY_UPDATE_NUM } from "./constant.actions";

type PlayerNumActionType = typeof PLAYER_MAIN_ADD_NUMBER
| typeof PLAYER_SECONDARY_ADD_NUMBER;

type PlayerConnActionType = typeof PLAYER_MAIN_UPDATE_CONNECTION
| typeof PLAYER_SECONDARY_UPDATE_CONNECTION;

type PlayerSelectedNumActionType = typeof PLAYER_MAIN_UPDATE_NUM_SELECTED;

export const addPlayerRandNum = (type: PlayerNumActionType, numberToUpdate?: number) => {

    let random;
    if (numberToUpdate !== undefined) {
        random = numberToUpdate
    }else {
        random = generateRandNum(10);
    } 
    return {
        type,
        payload: {
            random
        }
    } as const;
}

export const updatePlayerConnectionID = (type: PlayerConnActionType,connectionID: string) => {
    return {
        type,
        payload: {
            connectionID
        }
    } as const
}

export const updatePlayerSelectedNum = (type: PlayerSelectedNumActionType, selected: number) => {
    return {
        type,
        payload: {
            selected
        }
    } as const
}

export const updateSecondaryPlayerNum = (random: number, selected: number) => {
    return {
        type: PLAYER_SECONDARY_UPDATE_NUM,
        payload: {
            random,
            selected
        }
    } as const
}

export const updatePlayerWon = (playerType: PlayerType) => {
    const type = (playerType === 'playerMain') ? PLAYER_MAIN_UPDATE_HAS_WON: PLAYER_SECONDARY_UPDATE_HAS_WON; 
    return {
        type
    } as const
}
