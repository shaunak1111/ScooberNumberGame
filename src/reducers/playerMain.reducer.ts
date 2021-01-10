import { PlayerActions, PLAYER_STATE } from '../interface';

const initialState = {
    connectionID: null,
    numbers: [],
    hasWon: false
}

const playerMainReducer = (state: PLAYER_STATE = initialState, action: PlayerActions): PLAYER_STATE => {
    switch(action.type) {
        case "player_main/ADD_NUMBER": {
            return {
                ...state,
                numbers: [...state.numbers, {...action.payload, selected: undefined}]
            }
        }
        case "player_main/UPDATE_CONNECTION": {
            return {...state, connectionID: action.payload.connectionID}
        }

        case "player_main/UPDATE_NUM_SELECTED": {
            // get the last number from player main

            const len = state.numbers.length;
            const lastNumSelected = state.numbers[len - 1];
            return {
                ...state,
                numbers: [...state.numbers.slice(0, len - 1), {
                    ...lastNumSelected,
                    selected: action.payload.selected
                }]
            }
        }

        case "player_main/UPDATE_HAS_WON": {
            return {
                ...state,
                hasWon: true
            }
        }
        default:
            return state
    }
}

export default playerMainReducer