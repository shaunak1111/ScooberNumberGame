import { Middleware, MiddlewareAPI, Dispatch } from "redux";
import { PLAYER_MAIN_ADD_NUMBER } from "../actions/constant.actions";
import { AppActions } from "../interface";

export const PlayerMiddleware: Middleware = (store: MiddlewareAPI) => (next: Dispatch) => (action: AppActions) => {
    if (action.type === PLAYER_MAIN_ADD_NUMBER) {
        
    }
}