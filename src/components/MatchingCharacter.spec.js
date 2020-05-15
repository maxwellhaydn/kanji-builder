import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import MatchingCharacter from './MatchingCharacter';

describe('MatchingCharacter', function() {

    it('should display the character', function() {
        const wrapper = shallow(<MatchingCharacter value="水" />);

        expect(wrapper).to.contain.text('水');
    });

});
