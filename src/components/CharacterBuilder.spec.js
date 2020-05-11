import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import CharacterBuilder from './CharacterBuilder';
import CharacterEditorPanel from './CharacterEditorPanel';
import CharacterBuildingBlockList from './CharacterBuildingBlockList';

describe('CharacterBuilder', function() {

    it('should contain an editor and a list of building blocks', function() {
        const wrapper = shallow(
            <CharacterBuilder buildingBlocks="foo" />
        );

        expect(wrapper).to.containMatchingElement(<CharacterEditorPanel />);
        expect(wrapper).to.contain(
            <CharacterBuildingBlockList buildingBlocks="foo" />
        );
    });

});
