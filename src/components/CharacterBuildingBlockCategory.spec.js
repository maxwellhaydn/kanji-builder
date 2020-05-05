import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';

import CharacterBuildingBlockCategory from './CharacterBuildingBlockCategory';

chai.use(chaiEnzyme());

Enzyme.configure({ adapter: new Adapter() });

describe('CharacterBuildingBlockCategory', function() {

    it('should display the category name', function() {
        const wrapper = shallow(<CharacterBuildingBlockCategory name="Hats" />);

        expect(wrapper).to.contain.text('Hats');
    });

});
