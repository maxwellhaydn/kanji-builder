import React from 'react';

/**
 * A category grouping different character building blocks, e.g. "hats,"
 * "feet," "boxes."
 */
const CharacterBuildingBlockCategory = ({ name }) => {
    return <div className="character-building-block-category">{name}</div>;
};

export default CharacterBuildingBlockCategory;
