import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';

import CharacterBuildingBlock from './CharacterBuildingBlock';

chai.use(chaiEnzyme());

Enzyme.configure({ adapter: new Adapter() });

describe('CharacterBuildingBlock', function() {

    it('should display an image of the building block', function() {
        const wrapper = shallow(
            <CharacterBuildingBlock imageSrc="foo/bar" />
        );

        expect(wrapper.find('img')).to.have.attr('src').equal('foo/bar');
    });

});
