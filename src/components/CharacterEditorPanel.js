import React, { useEffect, useRef, useState } from 'react';
import { Stage } from 'react-konva';
import { useDebouncedCallback } from 'use-debounce';

import './CharacterEditorPanel.css';

// Virtual dimensions of the editor, i.e. the dimensions of the coordinate space
// you can draw on
const VIRTUAL_WIDTH = 1000;
const VIRTUAL_HEIGHT = 1000;

/**
 * A panel where users combine character building blocks to create a character.
 *
 * This component contains an HTML canvas, which should not be sized with CSS
 * because any images on it would be stretched. Instead, we get the dimensions
 * of the parent container and fit the canvas to it. We also listen for resize
 * events and adjust the canvas size when the size of its parent container
 * changes.
 *
 * This code is based on noetix's answer to the Stack Overflow question
 * "Rerender view on browser resize with React":
 *
 *     https://stackoverflow.com/a/55821171
 *
 * Also see the KonvaJS documentation on creating a responsive canvas:
 *
 *     https://konvajs.org/docs/sandbox/Responsive_Canvas.html
 */
const CharacterEditorPanel = (props) => {
    const container = useRef(null);
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [scale, setScale] = useState(0);

    const fitToContainer = () => {
        // Get the smallest dimension of the container, either width or
        // height, and scale to it
        const scale = Math.min(
            container.current.clientWidth / VIRTUAL_WIDTH,
            container.current.clientHeight / VIRTUAL_HEIGHT
        );

        setWidth(VIRTUAL_WIDTH * scale);
        setHeight(VIRTUAL_HEIGHT * scale);
        setScale(scale);
    };

    // Create a debounced version of fitToContainer so we don't call it
    // multiple times for a quick series of resize events
    const debounceWait = 100;
    const [handleResize] = useDebouncedCallback(
        fitToContainer,
        debounceWait,
        { leading: true }
    );

    useEffect(() => {
        fitToContainer();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [width, height, scale, handleResize]);

    return (
        <div className="character-editor-panel" ref={container}>
            <Stage
                width={width}
                height={height}
                scale={{x: scale, y: scale}}
            >
            </Stage>
        </div>
    );
};

export default CharacterEditorPanel;
