import { Dispatch, MiddlewareAPI } from "redux";
import { URL_SOCKET } from "../common/constants/constants-utility";
import { ISocketSend, SocketData } from "../interface";

export const webSocket = new WebSocket(URL_SOCKET);

// Dependency Injection to easy testing
export const socketOpen = (ws: WebSocket, cb: () => void) => {
    ws.onopen = () => {
        cb();
    }
}



// export const socketMessage = (ws: WebSocket, cb: (ev: MessageEvent, Dispatch?: Dispatch) => void) => {
//     ws.onmessage = (...args) => {
//         cb(...args);
//     }
// }

export function socketMessage(ws: WebSocket, cb: (ev: MessageEvent, dispatch: Dispatch, store: MiddlewareAPI) => void, dispatch: Dispatch, store: MiddlewareAPI) {

    ws.onmessage = (...args) => {
        cb(...args, dispatch, store);
    }
}

// function socketMessage (ws: WebSocket, cb: (ev: MessageEvent) => void) {
//     ws.onmessage = (...args) => {
//         cb(...args);
//     }
// }

export const socketClose = (ws: WebSocket, cb?: (ev?: CloseEvent) => void) => {
    ws.onclose = (...args) => {
        if (cb) {
            cb(...args);
        }
    }
}

export const sendMessage = <T>(ws: WebSocket, data: T) => {
    const wsData: ISocketSend = {
        action: 'message',
        data
    }

    ws.send(JSON.stringify(wsData))
}

export const parseWebSocketMessages = (evt: MessageEvent): SocketData['data'] => {
    const result = JSON.parse(evt.data);
    if (result.statusCode >= 400) {
        return {
            error: result.data.error,
            statusCode: result.statusCode
        }
    } else {
        const { connectionID, otherConnectionID, isBothPlayers, selected, random } = result.data;
        return {
            connectionID,
            otherConnectionID,
            isBothPlayers,
            selected,
            random
        }
    }
}
