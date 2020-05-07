import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import CharacterBuilder from './CharacterBuilder';
import CharacterEditorPanel from './CharacterEditorPanel';
import CharacterBuildingBlockList from './CharacterBuildingBlockList';

describe('CharacterBuilder', function() {

    it('should contain an editor and a list of building blocks', function() {
        const wrapper = shallow(
            <CharacterBuilder
                buildingBlocks="foo"
                editorWidth="20"
                editorHeight="40"
            />
        );

        expect(wrapper).to.contain([
            <CharacterEditorPanel width="20" height="40" />,
            <CharacterBuildingBlockList buildingBlocks="foo" />
        ]);
    });

});
