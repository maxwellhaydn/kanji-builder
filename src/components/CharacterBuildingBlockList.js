import React from 'react';

import CharacterBuildingBlock from './CharacterBuildingBlock';
import CharacterBuildingBlockCategory from './CharacterBuildingBlockCategory';

/**
 * A list of character building blocks divided into categories.
 */
const CharacterBuildingBlockList = ({ buildingBlocks }) => {
    // Organize building blocks by category so we can display them together
    const buildingBlocksByCategory = {};
    buildingBlocks.forEach(buildingBlock => {
        const category = buildingBlock.category;

        if (!buildingBlocksByCategory.hasOwnProperty(category)) {
            buildingBlocksByCategory[category] = [];
        }

        buildingBlocksByCategory[category].push(buildingBlock);
    });

    const categories = Object.keys(buildingBlocksByCategory).sort();

    return (
        <div id="character-building-block-list">
            {categories.map(category => {
                 const items = buildingBlocksByCategory[category].map(item =>
                     <CharacterBuildingBlock
                         key={item.id}
                         imageSrc={item.image}
                     />
                 );

                 return (
                     <React.Fragment key={category}>
                         <CharacterBuildingBlockCategory name={category} />
                         {items}
                     </React.Fragment>
                 );
            })}
        </div>
    );
};

export default CharacterBuildingBlockList;
