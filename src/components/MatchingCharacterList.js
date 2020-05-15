import React from 'react';

import MatchingCharacter from './MatchingCharacter';

/**
 * A list of characters that match what was created in the character builder.
 */
const MatchingCharacterList = ({ matches }) => {
    return (
        <div className="matching-character-list">
            <span className="num-matches">{matches.count()} matches</span>
            {matches.map(item => {
                 return <MatchingCharacter key={item} value={item} />;
            })}
        </div>
    );
};

export default MatchingCharacterList;
