import React from 'react';
import Button from 'react-bootstrap/Button';

/**
 * A single character building block.
 */
const CharacterBuildingBlock = ({ literal }) => {
    return (
        <Button
            className="character-building-block"
            variant="light"
        >
            {literal}
        </Button>
    );
};

export default CharacterBuildingBlock;
