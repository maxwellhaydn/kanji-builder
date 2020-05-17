import React from 'react';
import { Link } from 'react-router-dom';

/**
 * A character that matches what was created in the character builder.
 */
const MatchingCharacter = ({ value }) => {
    return (
        <Link className="matching-character" to={`/detail/${value}`}>
            {value}
        </Link>
    );
};

export default MatchingCharacter;
