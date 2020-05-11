import React from 'react';
import { Stage } from 'react-konva';

/**
 * A panel where users combine character building blocks to create a character.
 */
const CharacterEditorPanel = ({ width, height, scale }) => {
    return (
        <Stage
            className="character-editor-panel"
            width={width}
            height={height}
            scale={{x: scale, y: scale}}
        >
        </Stage>
    );
};

export default CharacterEditorPanel;
