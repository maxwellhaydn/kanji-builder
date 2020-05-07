import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Navbar from 'react-bootstrap/Navbar';

import App from './App';
import CharacterBuilder from './CharacterBuilder';
import MatchingCharacterList from './MatchingCharacterList';

describe('App', function() {

    it('should contain navbar, builder, and matching character list', function() {
        const wrapper = shallow(
            <App
                buildingBlocks="foo"
                matches="bar"
                editorWidth="29"
                editorHeight="273"
            />
        );

        expect(wrapper).to.contain([
            <Navbar />,
            <CharacterBuilder
                buildingBlocks="foo"
                editorWidth="29"
                editorHeight="273"
            />,
            <MatchingCharacterList matches="bar" />
        ]);
    });

});
