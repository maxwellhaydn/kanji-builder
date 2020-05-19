import React from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

import buildingBlocks from '../data/building-blocks.json';

// Group building blocks by category
const grouped = buildingBlocks.reduce((acc, cur) => {
    const category = cur.category;
    if (!acc[category]) acc[category] = [];
    acc[category].push(cur);

    return acc;
}, {});

// Sort categories naturally
const collator = new Intl.Collator('en', {
    numeric: true,
    sensitivity: 'base'
});
const categories = Object.keys(grouped).sort(collator.compare);

// Create an array of categories and building blocks in the order we will
// display them. This is a workaround because react-bootstrap's
// ToggleButtonGroup breaks if it contains anything other than buttons, e.g.
// React.Fragment
const ordered = [];
categories.forEach(category => {
    ordered.push({ name: category, isCategory: true });

    grouped[category].forEach(buildingBlock => {
        ordered.push(buildingBlock);
    });
});

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
            {ordered.map(item => {
                if (item.isCategory) {
                    return (
                        <ToggleButton
                            className="character-building-block-category"
                            key={item.name}
                            variant="primary"
                            disabled
                        >
                            {item.name}
                        </ToggleButton>
                    );
                }
                else {
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
                }
            })}
        </ToggleButtonGroup>
    );
};

export default CharacterBuildingBlockList;
