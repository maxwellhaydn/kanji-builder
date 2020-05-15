import React from 'react';

import CharacterBuildingBlock from './CharacterBuildingBlock';
import CharacterBuildingBlockCategory from './CharacterBuildingBlockCategory';

/**
 * A list of character building blocks divided into categories.
 */
const CharacterBuildingBlockList = ({ buildingBlocks, onClick }) => {
    // Organize building blocks by category so we can display them together
    const buildingBlocksByCategory = {};
    buildingBlocks.forEach(buildingBlock => {
        const category = buildingBlock.category;

        if (!buildingBlocksByCategory.hasOwnProperty(category)) {
            buildingBlocksByCategory[category] = [];
        }

        buildingBlocksByCategory[category].push(buildingBlock);
    });

    const categories = Object.keys(buildingBlocksByCategory);

    // Sort categories numerically if they are numbers, alphabetically
    // and case-insensitively otherwise
    const collator = new Intl.Collator('en', {
        numeric: true,
        sensitivity: 'base'
    });
    categories.sort((a, b) => collator.compare(a, b))

    return (
        <div className="character-building-block-list">
            {categories.map(category => {
                 const items = buildingBlocksByCategory[category].map(item =>
                     <CharacterBuildingBlock
                         key={item.id}
                         literal={item.literal}
                         onClick={onClick}
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
