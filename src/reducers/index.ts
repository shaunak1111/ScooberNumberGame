import {combineReducers} from "redux";
import playerMain from './playerMain.reducer';
import playerSecondary from './playerSecondary.reducer';
import websocketConnect from './websocketConnect.reducer';

 const rootReducer = combineReducers({
    playerMain,
    playerSecondary,
    websocketConnect
});



export default rootReducer;

export * from './playerMain.reducer';
export * from './playerSecondary.reducer';
export * from './websocketConnect.reducer';
