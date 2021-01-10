import { addPlayerRandNum, updatePlayerConnectionID, updatePlayerSelectedNum, updateWebSocketConn, updateWebSocketError, updateSecondaryPlayerNum, updatePlayerWon } from '../actions';
import { merge } from '../common/util';
import rootReducer from '../reducers';

export interface SocketData {
    statusCode: number;
    data : {
        error? : string;
        connectionID?: string;
        otherConnectionID? : string;
        isBothPlayers?: boolean;
        selected?: number;
        statusCode?: number;
        random?: number;
    }
}

export interface ISocketSend {
    action: 'message';
    [key: string]: any;
}

export type PlayerActions =
| ReturnType<typeof addPlayerRandNum>
| ReturnType<typeof updatePlayerConnectionID>
| ReturnType<typeof updatePlayerSelectedNum>
| ReturnType<typeof updateSecondaryPlayerNum>
| ReturnType<typeof updatePlayerWon>

export type PlayerType = 'playerMain' | 'playerSecondary';

export type PositionType = 'left' | 'right';

export type AppState = ReturnType<typeof rootReducer>;

export type PLAYER_STATE = {
    connectionID: string | null;
    numbers: Array<{
        random: number,
        selected?: number
    }>;  
    hasWon: boolean; 
}

export type WS_CONNECTION = {
    error?: {
        statusCode: number,
        error: string;
    }
    isBothPlayers: boolean;
}

export type WebsocketConnActions = ReturnType<typeof updateWebSocketConn>
| ReturnType<typeof updateWebSocketError>

export type AppActions = WebsocketConnActions | PlayerActions;

export type PlayersMergedType = ReturnType< typeof merge>;
