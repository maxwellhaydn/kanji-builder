import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import CharacterBuildingBlockCategory from './CharacterBuildingBlockCategory';

describe('CharacterBuildingBlockCategory', function() {

    it('should display the category name', function() {
        const wrapper = shallow(<CharacterBuildingBlockCategory name="Hats" />);

        expect(wrapper).to.contain.text('Hats');
    });

});
