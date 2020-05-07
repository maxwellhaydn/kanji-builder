import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import MatchingCharacter from './MatchingCharacter';

describe('MatchingCharacter', function() {

    it('should display the character literal', function() {
        const wrapper = shallow(<MatchingCharacter literal="水" />);

        expect(wrapper).to.contain.text('水');
    });

});
