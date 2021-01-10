import { WEBSOCKET_UPDATE_CONNECTION, WEBSOCKET_UPDATE_ERROR } from "./constant.actions";

export const updateWebSocketConn = (isBothPlayers: boolean) => {
    return {
        type: WEBSOCKET_UPDATE_CONNECTION,
        payload: {
            isBothPlayers
        }
    } as const
}

export const updateWebSocketError = (statusCode: number, errorMsg: string) => {
    return {
        type: WEBSOCKET_UPDATE_ERROR,
        payload: {
            error: {
                statusCode,
                error: errorMsg
            }
        }
    } as const
}
