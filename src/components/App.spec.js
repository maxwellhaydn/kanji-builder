import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Navbar from 'react-bootstrap/Navbar';

import App from './App';
import CharacterBuilder from './CharacterBuilder';

describe('App', function() {

    it('should contain a navbar and character builder', function() {
        const wrapper = shallow(<App />);

        expect(wrapper).to.contain.exactly(1).descendants(Navbar);
        expect(wrapper.find(Navbar)).to.contain(
            <Navbar.Brand>Kanji Builder</Navbar.Brand>
        );
        expect(wrapper).to.containMatchingElement(<CharacterBuilder />);
    });

});
