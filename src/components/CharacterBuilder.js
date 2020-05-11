import React, { useEffect, useRef, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import _debounce from 'lodash.debounce';

import CharacterBuildingBlockList from './CharacterBuildingBlockList';
import CharacterEditorPanel from './CharacterEditorPanel';

/**
 * An editor and a list of building blocks that can be used to build a
 * character.
 */
const CharacterBuilder = ({ buildingBlocks }) => {
    // Editor is a canvas with a virtual size of 1000x1000 pixels
    const editorVirtualWidth = 1000;
    const editorVirtualHeight = 1000;
    const editorContainer = useRef(null);
    const [editorWidth, setEditorWidth] = useState(0);
    const [editorHeight, setEditorHeight] = useState(0);
    const [editorScale, setEditorScale] = useState(0);

    useEffect(() => {
        /**
         * The CharacterEditorPanel is an HTML canvas, which should not be
         * sized with CSS. Instead, get the dimensions of the parent container
         * in the DOM and adjust the editor dimensions on resize events. This
         * code is based on noetix's answer to the Stack Overflow question
         * "Rerender view on browser resize with React":
         *
         *     https://stackoverflow.com/a/55821171
         *
         * Also see the KonvaJS documentation on creating a responsive canvas:
         *
         *     https://konvajs.org/docs/sandbox/Responsive_Canvas.html
         */
        const fitEditorToContainer = () => {
            const scale = Math.min(
                editorContainer.current.clientWidth / editorVirtualWidth,
                editorContainer.current.clientHeight / editorVirtualHeight
            );
            setEditorWidth(editorVirtualWidth * scale);
            setEditorHeight(editorVirtualHeight * scale);
            setEditorScale(scale);
        };

        // Create a debounced version of fitEditorToContainer so we don't call
        // it multiple times for a quick series of resize events
        const handleResize = _debounce(fitEditorToContainer, 100)

        fitEditorToContainer();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize',handleResize);
        };
    }, [editorWidth, editorHeight, editorScale]);

    return (
        <div className="character-builder">
            <Row>
                <Col xs="12" sm="8" ref={editorContainer}>
                    <CharacterEditorPanel
                        width={editorWidth}
                        height={editorHeight}
                        scale={editorScale}
                    />
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
