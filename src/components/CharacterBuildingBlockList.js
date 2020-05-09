import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

import './CharacterBuildingBlockList.css';
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
        <Accordion
            className="character-building-block-list"
            defaultActiveKey={categories[0]}
        >
            {categories.map(category => {
                 const items = buildingBlocksByCategory[category].map(item =>
                     <CharacterBuildingBlock
                         key={item.id}
                         imageSrc={item.image}
                     />
                 );

                 return (
                     <Card key={category}>
                         <Accordion.Toggle as={Card.Header} eventKey={category}>
                             <CharacterBuildingBlockCategory name={category} />
                         </Accordion.Toggle>
                         <Accordion.Collapse eventKey={category}>
                             <Card.Body>{items}</Card.Body>
                         </Accordion.Collapse>
                     </Card>
                 );
            })}
        </Accordion>
    );
};

export default CharacterBuildingBlockList;
