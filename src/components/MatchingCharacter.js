import React from 'react';

/**
 * A character that matches what was created in the character builder.
 */
const MatchingCharacter = ({ literal }) => {
    return <div className="matching-character">{literal}</div>;
};

export default MatchingCharacter;
