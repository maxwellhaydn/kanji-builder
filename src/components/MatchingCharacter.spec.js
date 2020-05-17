import React from 'react';
import { Link } from 'react-router-dom';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import MatchingCharacter from './MatchingCharacter';

describe('MatchingCharacter', function() {

    it('should display the character and a link to the detail view', function() {
        const wrapper = shallow(<MatchingCharacter value="水" />);

        expect(wrapper).to.contain.text('水');
        expect(wrapper).to.have.type(Link);
        expect(wrapper).to.have.prop('to', '/detail/水');
    });

});
