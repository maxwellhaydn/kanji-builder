import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import './MatchingCharacter.css';

/**
 * A character that matches what was created in the character builder.
 */
const MatchingCharacter = ({ value }) => {
    return (
        <Button
            className="matching-character"
            as={Link}
            to={`/detail/${value}`}
            size="lg"
            variant="outline-dark"
        >
            {value}
        </Button>
    );
};

export default MatchingCharacter;
