import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

import CharacterBuildingBlockList from './CharacterBuildingBlockList';

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

describe('CharacterBuildingBlockList', function() {

    it('should display a list of building blocks', function() {
        const wrapper = shallow(<CharacterBuildingBlockList />);

        expect(wrapper).to.have.exactly(1).descendants(ToggleButtonGroup);
        ['foo', 'bar', 'baz', 'quux', 'bat'].forEach(item => {
            expect(wrapper).to.containMatchingElement(
                <ToggleButton value={item}>{item}</ToggleButton>
            );
        });
    });

    it('should accept a list of selected items', function() {
        const wrapper = shallow(
            <CharacterBuildingBlockList selected={['foo', 'quux']} />
        );

        expect(wrapper).to.have.prop('value').deep.equal(['foo', 'quux']);
    });

    it('should attach the supplied onChange handler', function() {
        const onChange = jest.fn();
        const wrapper = shallow(
            <CharacterBuildingBlockList onChange={onChange} />
        );

        wrapper.simulate('change');

        expect(onChange).to.have.beenCalledTimes(1);
    });

});
