import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import CharacterDetail from './CharacterDetail';

jest.mock('../data/character-details.json', () => ({
    foo: {
        readings: ['foo1', 'foo2', 'foo3'],
        meanings: ['foodef1', 'foodef2']
    },
    bar: {
        readings: ['bar1', 'bar2', 'bar3'],
        meanings: ['bardef1', 'bardef2', 'bardef3']
    },
    baz: {
        readings: ['baz1', 'baz2', 'baz3'],
        meanings: []
    }
}));

describe('CharacterDetail', function() {

    it('should display the character and readings', function() {
        const wrapper = shallow(<CharacterDetail character="foo" />);

        expect(wrapper.find('.character-literal')).to.have.text('foo');
        expect(wrapper.find('.character-readings')).to.contain([
            <li>foo1</li>,
            <li>foo2</li>,
            <li>foo3</li>
        ]);
        expect(wrapper.find('.character-meanings')).to.contain([
            <li>foodef1</li>,
            <li>foodef2</li>
        ]);
    });

});
