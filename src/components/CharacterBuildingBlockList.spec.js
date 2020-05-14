import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import CharacterBuildingBlock from './CharacterBuildingBlock';
import CharacterBuildingBlockCategory from './CharacterBuildingBlockCategory';
import CharacterBuildingBlockList from './CharacterBuildingBlockList';

describe('CharacterBuildingBlockList', function() {

    it('should display building blocks grouped into categories', function() {
        const data = [{
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
        }];

        const wrapper = shallow(
            <CharacterBuildingBlockList buildingBlocks={data} />
        );

        expect(wrapper).to.contain([
            <CharacterBuildingBlockCategory name="Blocks" />,
            <CharacterBuildingBlock literal="quux" />,
            <CharacterBuildingBlock literal="bat" />,
            <CharacterBuildingBlockCategory name="Feet" />,
            <CharacterBuildingBlock literal="bar" />,
            <CharacterBuildingBlockCategory name="Hats" />,
            <CharacterBuildingBlock literal="foo" />,
            <CharacterBuildingBlock literal="baz" />
        ]);
    });

});
