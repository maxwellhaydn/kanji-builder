import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import { expect } from 'chai';
import Navbar from 'react-bootstrap/Navbar';

import App from './App';
import CharacterBuilder from './CharacterBuilder';
import CharacterDetail from './CharacterDetail';

jest.mock('../data/building-blocks.json', () => [{
    id: 1,
    category: 'Hats',
    literal: 'foo'
}, {
    id: 2,
    category: 'Feet',
    literal: 'bar'
}, {
    id: 3,
    category: 'Hats',
    literal: 'baz'
}, {
    id: 4,
    category: 'Blocks',
    literal: 'quux'
}, {
    id: 5,
    category: 'Blocks',
    literal: 'bat'
}]);

jest.mock('../data/lookup.json', () => ({
    foo: ['a', 'c', 'd'],
    bar: ['b', 'c', 'e'],
    baz: ['a'],
    quux: ['b', 'e'],
    bat: ['c']
}));

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

describe('App', function() {

    describe('character builder view', function() {

        it('should contain a navbar and character builder', function() {
            const wrapper = mount(
                <MemoryRouter initialEntries={['/']}>
                    <App />
                </MemoryRouter>
            );

            expect(wrapper).to.contain.exactly(1).descendants(Navbar);
            expect(wrapper.find(Navbar)).to.contain(
                <Navbar.Brand>Kanji Builder</Navbar.Brand>
            );
            expect(wrapper).to.containMatchingElement(<CharacterBuilder />);
        });

    });

    describe('character detail view', function() {

        it('should contain a navbar and character details', function() {
            const wrapper = mount(
                <MemoryRouter initialEntries={['/detail/foo']}>
                    <App />
                </MemoryRouter>
            );

            expect(wrapper).to.contain.exactly(1).descendants(Navbar);
            expect(wrapper).to.containMatchingElement(
                <CharacterDetail character="foo" />
            );
        });

    });

});
