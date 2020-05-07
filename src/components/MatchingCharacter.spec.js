import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';

import MatchingCharacter from './MatchingCharacter';

chai.use(chaiEnzyme());

Enzyme.configure({ adapter: new Adapter() });

describe('MatchingCharacter', function() {

    it('should display the character literal', function() {
        const wrapper = shallow(<MatchingCharacter literal="水" />);

        expect(wrapper).to.contain.text('水');
    });

});
