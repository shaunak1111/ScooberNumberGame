import { PLAYER_STATE } from "../../interface";
import { MOCK_PLAYER_MAIN_CONNECTIONID, MOCK_PLAYER_SECONDARY_CONNECTIONID } from "./constants.mock";

export const playerMainMock: PLAYER_STATE = {
    connectionID: MOCK_PLAYER_MAIN_CONNECTIONID,
    numbers: [{
        random: 10,
        selected: -1
    }],
    hasWon: false
}

export const playerSecondaryMock: PLAYER_STATE = {
    connectionID: MOCK_PLAYER_SECONDARY_CONNECTIONID,
    numbers: [{
        random: 18,
        selected: -2
    }],
    hasWon: false
}
