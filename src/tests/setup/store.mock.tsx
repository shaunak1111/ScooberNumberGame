import React from 'react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { shallow, mount } from 'enzyme';
import { WSMsgSendMiddleware, WSReceiveMsgMiddleware } from '../../middleware';
import { playerMainMock, playerSecondaryMock, webSocketMock } from '../mocks';
import { AppState } from '../../interface';
import Home from '../../views/Home';

const mockStore = configureStore([WSMsgSendMiddleware, WSReceiveMsgMiddleware]);

export const store = mockStore({
    playerMain: playerMainMock,
    playerSecondary: playerSecondaryMock,
    websocketConnect: webSocketMock
});
