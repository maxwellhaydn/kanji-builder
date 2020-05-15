import React from 'react';
import Button from 'react-bootstrap/Button';

/**
 * A single character building block.
 */
const CharacterBuildingBlock = ({ literal, onClick }) => {
    return (
        <Button
            className="character-building-block"
            onClick={onClick}
            variant="light"
        >
            {literal}
        </Button>
    );
};

export default CharacterBuildingBlock;
