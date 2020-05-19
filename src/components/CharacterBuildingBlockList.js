import React from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

import buildingBlocks from '../data/building-blocks.json';

/**
 * A list of character building blocks divided into categories.
 */
const CharacterBuildingBlockList = ({ onChange, selected }) => {
    return (
        <ToggleButtonGroup
            className="character-building-block-list flex-wrap"
            type="checkbox"
            value={selected}
            onChange={onChange}
        >
            {buildingBlocks.map(item => {
                 return (
                     <ToggleButton
                         className="character-building-block"
                         key={item.literal}
                         value={item.literal}
                         variant="light"
                     >
                         {item.literal}
                     </ToggleButton>
                 );
            })}
        </ToggleButtonGroup>
    );
};

export default CharacterBuildingBlockList;
