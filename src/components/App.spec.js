import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Navbar from 'react-bootstrap/Navbar';

import App from './App';
import CharacterBuildingBlockList from './CharacterBuildingBlockList';
import MatchingCharacterList from './MatchingCharacterList';

describe('App', function() {

    it('should contain navbar, builder, and matching character list', function() {
        const wrapper = shallow(<App buildingBlocks="foo" matches="bar" />);

        expect(wrapper).to.contain([
            <Navbar />,
            <CharacterBuildingBlockList buildingBlocks="foo" />,
            <MatchingCharacterList matches="bar" />
        ]);
    });

});
