import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import MatchingCharacter from './MatchingCharacter';
import MatchingCharacterList from './MatchingCharacterList';

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
