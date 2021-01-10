import {WebsocketConnActions, WS_CONNECTION} from '../interface'

const initialState = {
    error: undefined,
    isBothPlayers: false
}


export default (state: WS_CONNECTION = initialState, action: WebsocketConnActions) => {
    switch(action.type) {
        case "websocket/UPDATE_CONNECTION": {
            return {...state, isBothPlayers : action.payload.isBothPlayers}
        }
        case "websocket/UPDATE_ERROR": {
            return {
                ...state,
                error: action.payload.error
            }
        }
        default:
            return state
    }
}

