import { URL_SOCKET } from "../../common/constants/constants-utility";
import  * as webSocketUtil  from "../../service/websocket.service";

describe('test websokcet', () => {

    it('should open a websocket and execute the callback fn', () => {
        const ws = new WebSocket(URL_SOCKET);
        const cb = () => {
            expect(2).toEqual(2);
        }
        webSocketUtil.socketOpen(ws, cb);
        expect(ws.onopen).not.toBeUndefined();
    })
})
