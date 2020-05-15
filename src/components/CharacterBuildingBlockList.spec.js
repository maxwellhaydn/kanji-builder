import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import CharacterBuildingBlock from './CharacterBuildingBlock';
import CharacterBuildingBlockCategory from './CharacterBuildingBlockCategory';
import CharacterBuildingBlockList from './CharacterBuildingBlockList';

describe('CharacterBuildingBlockList', function() {

    it('should display building blocks grouped into sorted categories', function() {
        const buildingBlocks = [{
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
            <CharacterBuildingBlockList buildingBlocks={buildingBlocks} />
        );

        expect(wrapper.childAt(0)).to.have.type(CharacterBuildingBlockCategory)
                                  .and.to.have.prop('name', 'Blocks');
        expect(wrapper.childAt(1)).to.have.type(CharacterBuildingBlock)
                                  .and.to.have.prop('literal', 'quux');
        expect(wrapper.childAt(2)).to.have.type(CharacterBuildingBlock)
                                  .and.to.have.prop('literal', 'bat');
        expect(wrapper.childAt(3)).to.have.type(CharacterBuildingBlockCategory)
                                  .and.to.have.prop('name', 'Feet');
        expect(wrapper.childAt(4)).to.have.type(CharacterBuildingBlock)
                                  .and.to.have.prop('literal', 'bar');
        expect(wrapper.childAt(5)).to.have.type(CharacterBuildingBlockCategory)
                                  .and.to.have.prop('name', 'Hats');
        expect(wrapper.childAt(6)).to.have.type(CharacterBuildingBlock)
                                  .and.to.have.prop('literal', 'foo');
        expect(wrapper.childAt(7)).to.have.type(CharacterBuildingBlock)
                                  .and.to.have.prop('literal', 'baz');
    });

    it('should sort categories naturally', function() {
        const buildingBlocks = [{
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
        }, {
            id: 6,
            category: '80',
            literal: 'something'
        }, {
            id: 7,
            category: '9',
            literal: 'something else'
        }];

        const wrapper = shallow(
            <CharacterBuildingBlockList buildingBlocks={buildingBlocks} />
        );

        const categories = wrapper.find(CharacterBuildingBlockCategory)
                                  .map(node => node.prop('name'));

        expect(categories).to.deep.equal(
            [ '9', '80', 'Blocks', 'Feet', 'Hats' ]
        );
    });

    it('should pass the building block literal to the supplied click handler', function() {
        const buildingBlocks = [{
            id: 1,
            category: 'Hats',
            literal: 'foo'
        }, {
            id: 2,
            category: 'Feet',
            literal: 'bar'
        }];
        const onClick = jest.fn();

        const wrapper = shallow(
            <CharacterBuildingBlockList
                buildingBlocks={buildingBlocks}
                onClick={onClick}
            />
        );

        wrapper.findWhere(c => c.prop('literal') === 'foo').simulate('click');

        expect(onClick).to.have.beenCalledWith('foo');
    });

});
