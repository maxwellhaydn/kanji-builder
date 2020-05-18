import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import CharacterDetail from './CharacterDetail';

jest.mock('../data/character-details.json', () => ({
    foo: {
        readings: ['foo1', 'foo2', 'foo3']
    },
    bar: {
        readings: ['bar1', 'bar2', 'bar3']
    },
    baz: {
        readings: ['baz1', 'baz2', 'baz3']
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
    });

});
