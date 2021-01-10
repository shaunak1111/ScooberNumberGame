import React from "react";
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import toJson from 'enzyme-to-json';
import Home from '../../views/Home';
import { store } from '../setup/store.mock';

describe('Home component unit testing', () => {
    const mountedComp = mount(<Provider store={store}><Home /></Provider>)

    it('Home renders correctly', () => {
        expect(toJson(mountedComp)).toMatchSnapshot();
    })

    it('should render two Player components with the provided mock redux store data', () => {
        const player = mountedComp.find('Memo(Player)');
        expect(player.length).toBe(2);
    })
})
