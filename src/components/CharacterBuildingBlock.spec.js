import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import CharacterBuildingBlock from './CharacterBuildingBlock';

describe('CharacterBuildingBlock', function() {

    it('should display an image of the building block', function() {
        const wrapper = shallow(
            <CharacterBuildingBlock imageSrc="foo/bar" />
        );

        expect(wrapper.find('img')).to.have.attr('src').equal('foo/bar');
    });

});
