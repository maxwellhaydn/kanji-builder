import React from 'react';

import CharacterBuildingBlockList from './CharacterBuildingBlockList';
import CharacterEditorPanel from './CharacterEditorPanel';
/**
 * An editor and a list of building blocks that can be used to build a
 * character.
 */
const CharacterBuilder = ({ buildingBlocks }) => {
    return (
        <div className="character-builder">
            <CharacterEditorPanel />
            <CharacterBuildingBlockList buildingBlocks={buildingBlocks} />
        </div>
    );
};

export default CharacterBuilder;
