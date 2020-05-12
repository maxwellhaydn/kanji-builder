import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Navbar from 'react-bootstrap/Navbar';

import App from './App';
import CharacterBuilder from './CharacterBuilder';
import MatchingCharacterList from './MatchingCharacterList';

describe('App', function() {

    it('should contain navbar, builder, and matching character list', function() {
        const wrapper = shallow(<App buildingBlocks="foo" matches="bar" />);

        expect(wrapper).to.contain(<Navbar />);
        expect(wrapper).to.contain(<CharacterBuilder buildingBlocks="foo" />);
        expect(wrapper).to.contain(<MatchingCharacterList matches="bar" />);
    });

});
