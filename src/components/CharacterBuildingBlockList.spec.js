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
}, {
    id: 6,
    category: '80',
    literal: 'something'
}, {
    id: 7,
    category: '9',
    literal: 'something else'
}]);

describe('CharacterBuildingBlockList', function() {

    it('should display a sorted list of building blocks and categories', function() {
        const wrapper = shallow(<CharacterBuildingBlockList />);

        expect(wrapper).to.have.type(ToggleButtonGroup);

        // There should be 12 buttons, one for each category and one for each
        // building block
        expect(wrapper).to.have.exactly(12).descendants(ToggleButton);

        expect(wrapper.childAt(0)).to.have.text('9');
        expect(wrapper.childAt(0)).to.have.prop('disabled');

        expect(wrapper.childAt(1)).to.have.text('something else');
        expect(wrapper.childAt(1)).to.have.prop('value', 'something else');

        expect(wrapper.childAt(2)).to.have.text('80');
        expect(wrapper.childAt(2)).to.have.prop('disabled');

        expect(wrapper.childAt(3)).to.have.text('something');
        expect(wrapper.childAt(3)).to.have.prop('value', 'something');

        expect(wrapper.childAt(4)).to.have.text('Blocks');
        expect(wrapper.childAt(4)).to.have.prop('disabled');

        expect(wrapper.childAt(5)).to.have.text('quux');
        expect(wrapper.childAt(5)).to.have.prop('value', 'quux');

        expect(wrapper.childAt(6)).to.have.text('bat');
        expect(wrapper.childAt(6)).to.have.prop('value', 'bat');

        expect(wrapper.childAt(7)).to.have.text('Feet');
        expect(wrapper.childAt(7)).to.have.prop('disabled');

        expect(wrapper.childAt(8)).to.have.text('bar');
        expect(wrapper.childAt(8)).to.have.prop('value', 'bar');

        expect(wrapper.childAt(9)).to.have.text('Hats');
        expect(wrapper.childAt(9)).to.have.prop('disabled');

        expect(wrapper.childAt(10)).to.have.text('foo');
        expect(wrapper.childAt(10)).to.have.prop('value', 'foo');

        expect(wrapper.childAt(11)).to.have.text('baz');
        expect(wrapper.childAt(11)).to.have.prop('value', 'baz');

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
