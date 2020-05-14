import React from 'react';

/**
 * A single character building block.
 */
const CharacterBuildingBlock = ({ literal }) => {
    return (
        <button
            className="character-building-block"
            type="button"
        >
            {literal}
        </button>
    );
};

export default CharacterBuildingBlock;
