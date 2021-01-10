import { PlayerActions, PLAYER_STATE } from '../interface';

const initialState = {
    connectionID: null,
    numbers: [],
    hasWon: false
}

const playerSecondaryReducer =  (state: PLAYER_STATE = initialState, action: PlayerActions):  PLAYER_STATE => {
    switch(action.type) {
        // case "player_secondary/ADD_NUMBER": {
        //     return {
        //         ...state,
        //         numbers: [...state.numbers, {...action.payload, selected: undefined}]
        //     }
        // }
        case "player_secondary/UPDATE_CONNECTION": {            
            return {...state, connectionID: action.payload.connectionID}
        }
        case "player_secondary/UPDATE_NUM": {
            return {
                ...state,
                numbers: [
                    ...state.numbers,
                    action.payload
                ]
            }
        }
        case "player_secondary/UPDATE_HAS_WON": {
            return {
                ...state,
                hasWon: true
            }
        }
        default:
            return state
    }
}

export default playerSecondaryReducer;
