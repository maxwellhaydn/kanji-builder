import React from 'react';

import MatchingCharacter from './MatchingCharacter';

/**
 * A character that matches what was created in the character builder.
 */
const MatchingCharacterList = ({ matches }) => {
    return (
        <div className="matching-character-list">
            <span className="num-matches">{matches.length} matches</span>
            {matches.map(item => {
                 return (
                     <MatchingCharacter
                         key={item.id}
                         literal={item.literal}
                     />
                 );
            })}
        </div>
    );
};

export default MatchingCharacterList;
