import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import { expect } from 'chai';
import Navbar from 'react-bootstrap/Navbar';

import App from './App';
import CharacterBuilder from './CharacterBuilder';
import CharacterDetail from './CharacterDetail';

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
