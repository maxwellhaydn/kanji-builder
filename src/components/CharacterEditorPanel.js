import React from 'react';
import { Stage } from 'react-konva';

/**
 * A panel where users combine character building blocks to create a character.
 */
const CharacterEditorPanel = ({ width, height }) => {
    return <Stage width={width} height={height}></Stage>;
};

export default CharacterEditorPanel;
