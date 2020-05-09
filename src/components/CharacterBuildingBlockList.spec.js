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
            image: 'foo'
        }, {
            id: 2,
            category: 'Feet',
            image: 'bar'
        }, {
            id: 3,
            category: 'Hats',
            image: 'baz'
        }, {
            id: 4,
            category: 'Blocks',
            image: 'quux'
        }, {
            id: 5,
            category: 'Blocks',
            image: 'bat'
        }];

        const wrapper = shallow(
            <CharacterBuildingBlockList buildingBlocks={data} />
        );

        ['Blocks', 'Feet', 'Hats'].forEach(category => {
            expect(wrapper).to.contain(
                <CharacterBuildingBlockCategory name={category} />
            );
        });

        data.forEach(buildingBlock => {
            expect(wrapper).to.contain(
                <CharacterBuildingBlock imageSrc={buildingBlock.image} />
            );
        });
    });

});
