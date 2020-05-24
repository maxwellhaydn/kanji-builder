import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Set } from 'immutable';

import MatchingCharacter from './MatchingCharacter';
import MatchingCharacterList from './MatchingCharacterList';

describe('MatchingCharacterList', function() {

    it('should display the number of matches', function() {
        const matches = Set(['今', '日', '花']);
        const wrapper = shallow(<MatchingCharacterList matches={matches} />);

        expect(wrapper).to.contain.text('3 matches');
    });

    it('should display each matching character', function() {
        const matches = Set(['今', '日', '花']);
        const wrapper = shallow(<MatchingCharacterList matches={matches} />);

        expect(wrapper).to.contain([
            <MatchingCharacter value="今" />,
            <MatchingCharacter value="日" />,
            <MatchingCharacter value="花" />
        ]);
    });
});
