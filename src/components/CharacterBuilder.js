import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import CharacterBuildingBlockList from './CharacterBuildingBlockList';
import CharacterEditorPanel from './CharacterEditorPanel';

/**
 * An editor and a list of building blocks that can be used to build a
 * character.
 */
const CharacterBuilder = ({ buildingBlocks }) => {
    return (
        <div className="character-builder">
            <Row>
                <Col xs="12" sm="8">
                    <CharacterEditorPanel />
                </Col>
                <Col xs="12" sm="4">
                    <CharacterBuildingBlockList
                        buildingBlocks={buildingBlocks}
                    />
                </Col>
            </Row>
        </div>
    );
};

export default CharacterBuilder;
