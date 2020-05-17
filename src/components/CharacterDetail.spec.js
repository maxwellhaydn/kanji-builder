import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import CharacterDetail from './CharacterDetail';

describe('CharacterDetail', function() {

    it('should display the character', function() {
        const wrapper = shallow(<CharacterDetail character="foo" />);

        expect(wrapper).to.have.text('foo');
    });

});
