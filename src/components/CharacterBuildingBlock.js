import React from 'react';

/**
 * A single character building block.
 */
const CharacterBuildingBlock = ({ imageSrc }) => {
    return <img className="character-building-block" src={imageSrc} />;
};

export default CharacterBuildingBlock;
