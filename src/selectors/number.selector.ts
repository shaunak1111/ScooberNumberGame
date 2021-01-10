import { merge } from "../common/util";
import { createSelector } from "reselect";
import { AppState, PlayerType, PLAYER_STATE } from "../interface";

const getPlayer = (state: AppState, playerType: PlayerType) => state[playerType]

const checkComputedNum = (num: PLAYER_STATE['numbers'][0]) => {
    if (!num?.random || !num?.selected) {
        return '?'
    } else {
        return Math.floor((num.random + num.selected) / 3);
    }
}

export const getPlayerWonSelector = (playerType: PlayerType) => createSelector(
    (state: AppState) => getPlayer(state, playerType),
    (playerType) => playerType.hasWon 
)


export const getPlayerInputsSelector = (state: AppState, playerType: PlayerType) => createSelector(
    (state: AppState) => state,

    // append right & left position property to main and secondary players
    (state: AppState) => merge(state.playerMain, state.playerSecondary, playerType)
)
