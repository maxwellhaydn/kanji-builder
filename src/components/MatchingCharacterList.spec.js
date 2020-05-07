import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';

import MatchingCharacter from './MatchingCharacter';
import MatchingCharacterList from './MatchingCharacterList';

chai.use(chaiEnzyme());

Enzyme.configure({ adapter: new Adapter() });

describe('MatchingCharacterList', function() {

    it('should display the number of matches', function() {
        const matches = [{
            id: 1,
            literal: '今'
        }, {
            id: 2,
            literal: '日'
        }, {
            id: 3,
            literal: '花'
        }];

        const wrapper = shallow(<MatchingCharacterList matches={matches} />);

        expect(wrapper).to.contain.text('3 matches');
    });

    it('should display each matching character', function() {
        const matches = [{
            id: 1,
            literal: '今'
        }, {
            id: 2,
            literal: '日'
        }, {
            id: 3,
            literal: '花'
        }];

        const wrapper = shallow(<MatchingCharacterList matches={matches} />);

        expect(wrapper).to.contain([
            <MatchingCharacter literal="今" />,
            <MatchingCharacter literal="日" />,
            <MatchingCharacter literal="花" />
        ]);
    });
});
