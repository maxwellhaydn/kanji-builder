import React from 'react';
import { act } from 'react-dom/test-utils';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import { Stage } from 'react-konva';

import CharacterEditorPanel from './CharacterEditorPanel';

describe('CharacterEditorPanel', function() {

    it('should have an initial width and height of zero', function() {
        const wrapper = shallow(<CharacterEditorPanel />);

        expect(wrapper.find(Stage))
            .to.have.props([ 'width', 'height', 'scale' ])
            .deep.equal([ 0, 0, { x: 0, y: 0 } ]);
    });

    it('should fit to its container on window resize', function() {
        jest.useFakeTimers();

        const handlers = {};

        // Mock window.addEventListener so we can call event listeners when we
        // want during the test
        window.addEventListener = jest.fn((event, cb) => {
            handlers[event] = cb;
        });

        let wrapper;
        act(() => {
            wrapper = mount(<CharacterEditorPanel />);
        });

        // Set the width and height of the container
        const container = wrapper.getDOMNode();
        Object.defineProperty(container, 'clientWidth', { value: 500 });
        Object.defineProperty(container, 'clientHeight', { value: 200 });

        act(() => {
            // Trigger a resize event and wait for debounced resize handler to
            // finish
            handlers.resize();
            jest.advanceTimersByTime(100);
        });

        // Re-render component after the resize
        wrapper.update();

        expect(wrapper.find(Stage))
            .to.have.props([ 'width', 'height', 'scale' ])
            .deep.equal([ 200, 200, { x: 0.2, y: 0.2 } ]);
    });

});
