import { createSelector, OutputSelector } from "reselect";
import { AppState } from "../interface";

const getWSState = (state: AppState) => {
    return state.websocketConnect;
};

export const isPlayerConnectedSelector = createSelector(
    getWSState,
    isBothPlayers => isBothPlayers.isBothPlayers
);

export const wsErrorSelector = createSelector(
    getWSState,
    state => state?.error
);

export const getPlayerTypeSelector = createSelector(
    getWSState,
    state => state?.error ? 'playerMain': 'playerSecondary'
)