import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Button from 'react-bootstrap/Button';

import CharacterBuildingBlock from './CharacterBuildingBlock';

describe('CharacterBuildingBlock', function() {

    it('should display a button with the building block text', function() {
        const wrapper = shallow(
            <CharacterBuildingBlock literal="foo" />
        );

        expect(wrapper).to.have.exactly(1).descendants('Button');
        expect(wrapper.find('Button')).to.have.text('foo');
    });

});
