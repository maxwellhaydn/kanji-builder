import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Set } from 'immutable';

import CharacterBuilder, { reducer } from './CharacterBuilder';
import CharacterBuildingBlockList from './CharacterBuildingBlockList';
import MatchingCharacterList from './MatchingCharacterList';

jest.mock('../data/building-blocks.json', () => [{
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
}]);

jest.mock('../data/lookup.json', () => ({
    foo: ['a', 'c', 'd'],
    bar: ['b', 'c', 'e'],
    baz: ['a'],
    quux: ['b', 'e'],
    bat: ['c']
}));

describe('reducer', function() {

    it('should handle changeSelection actions', function() {
        const action = { type: 'changeSelection', payload: ['foo', 'bar'] };
        const state = reducer(undefined, action);

        expect(state).to.deep.equal({
            selected: ['foo', 'bar'],
            matches: Set(['c'])
        });
    });

});

describe('CharacterBuilder', function() {

    it('should contain a list of building blocks and a list of matching characters', function() {
        const wrapper = shallow(<CharacterBuilder />);

        expect(wrapper).to.containMatchingElement(<CharacterBuildingBlockList />);
        expect(wrapper).to.containMatchingElement(<MatchingCharacterList />);
    });

    it('should update the list of selected building blocks on change', function() {
        const wrapper = shallow(<CharacterBuilder />);

        wrapper.find(CharacterBuildingBlockList).simulate('change', ['foo']);

        expect(wrapper.find(MatchingCharacterList))
            .to.have.prop('matches').deep.equal(Set(['a', 'c', 'd']));
    });

});
