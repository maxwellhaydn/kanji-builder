import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Button from 'react-bootstrap/Button';

import MatchingCharacter from './MatchingCharacter';

describe('MatchingCharacter', function() {

    it('should display the character and a link to the detail view', function() {
        const wrapper = shallow(<MatchingCharacter value="水" />);

        expect(wrapper).to.contain.text('水');
        expect(wrapper).to.have.type(Button);
        expect(wrapper).to.have.prop('to', '/detail/水');
    });

});
