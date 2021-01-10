import { Middleware, MiddlewareAPI, Dispatch, AnyAction } from "redux";
import pipe from 'lodash/fp/pipe';
import { addPlayerRandNum, updatePlayerConnectionID, updatePlayerWon, updateSecondaryPlayerNum, updateWebSocketConn, updateWebSocketError } from "../actions";
import { PLAYER_MAIN_ADD_NUMBER, PLAYER_MAIN_UPDATE_CONNECTION, PLAYER_MAIN_UPDATE_NUM_SELECTED, PLAYER_SECONDARY_UPDATE_CONNECTION, PLAYER_SECONDARY_UPDATE_NUM } from "../actions/constant.actions";
import { AppActions, AppState, PlayerType, PLAYER_STATE } from "../interface";
import { parseWebSocketMessages, sendMessage, socketMessage, webSocket } from "../service";
import { calculateSumByThree } from "../common/util";

const calculateMergedInput = (store: AppState, playerType: PlayerType) => {
    // functional programming with lodash
    return pipe(
        (store) => store[playerType],
        (playerMain) => playerMain.numbers[playerMain.numbers.length - 1]
    )(store)
}

const getLastValueOfNum = (store: MiddlewareAPI, player: PlayerType): PLAYER_STATE['numbers'][0] => {
    // functional programming with lodash
    return pipe(
        () => store.getState(),
        (storeData: AppState) => calculateMergedInput(storeData, player)
    )(store)
}

export const WSMsgSendMiddleware: Middleware = (store: MiddlewareAPI) => (next: Dispatch) => (action: AppActions) => {
    if (action.type === PLAYER_MAIN_UPDATE_NUM_SELECTED) {
        const { dispatch } = store;
        const { random } = getLastValueOfNum(store, 'playerMain');
        const sentData = {
            ...action.payload,
            random
        }

        if (calculateSumByThree(random, action.payload.selected) <= 0) {
            dispatch(updatePlayerWon('playerMain'));
        }
        console.log('sent data', sentData);
        sendMessage(webSocket, sentData);
    }

    next(action);
}

const socketMessageCb = (evt: MessageEvent, dispatch: Dispatch<AnyAction>, store: MiddlewareAPI) => {
    console.log('evt', evt.data);
    const { error, statusCode = 200, connectionID, otherConnectionID, isBothPlayers = false, selected, random } = parseWebSocketMessages(evt);
    if (error) {
        dispatch(updateWebSocketError(statusCode, error))
        dispatch(addPlayerRandNum(PLAYER_MAIN_ADD_NUMBER))
    } else if (connectionID && otherConnectionID) {

        dispatch(updatePlayerConnectionID(PLAYER_MAIN_UPDATE_CONNECTION, connectionID));

        dispatch(updatePlayerConnectionID(PLAYER_SECONDARY_UPDATE_CONNECTION, otherConnectionID));

        dispatch(updateWebSocketConn(isBothPlayers));
    } else {
        console.log(random, 'random');

        // type safety enforced by typescript
        if (random !== undefined && selected !== undefined) {
            dispatch(updateSecondaryPlayerNum(random, selected));
            const calculatedVal = calculateSumByThree(random, selected);
            if (calculatedVal <= 0) {
                dispatch(updatePlayerWon('playerSecondary'));
            } else {
                dispatch(addPlayerRandNum(PLAYER_MAIN_ADD_NUMBER, calculatedVal));
            }
        }
    }
}

export const WSReceiveMsgMiddleware: Middleware = (store: MiddlewareAPI) => (next: Dispatch) => (action: AppActions) => {
    const { dispatch } = store;
    socketMessage(webSocket, socketMessageCb, dispatch, store);
    next(action);
}
