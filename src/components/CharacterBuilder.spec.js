import React from 'react';
import { act } from 'react-dom/test-utils';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import CharacterBuilder from './CharacterBuilder';
import CharacterEditorPanel from './CharacterEditorPanel';
import CharacterBuildingBlockList from './CharacterBuildingBlockList';

// The default export from the lodash.debounce module is the _debounce
// function. We don't test the actual debouncing here, so mock _debounce to
// just return the original function that's passed to it.
jest.mock('lodash.debounce', () => {
    return {
        __esModule: true,
        default: jest.fn(fn => fn)
    };
});

describe('CharacterBuilder', function() {

    it('should contain an editor and a list of building blocks', function() {
        const wrapper = shallow(
            <CharacterBuilder buildingBlocks="foo" />
        );

        expect(wrapper).to.containMatchingElement(<CharacterEditorPanel />);
        expect(wrapper).to.contain(
            <CharacterBuildingBlockList buildingBlocks="foo" />
        );
    });

    it('should give the editor an initial width and height of zero', function()
{
        const wrapper = shallow(
            <CharacterBuilder buildingBlocks="foo" />
        );

        expect(wrapper.find(CharacterEditorPanel)).to.have.props({
            width: 0,
            height: 0
        });
    });

    it('should fit the editor to its container on window resize', function() {
        const handlers = {};

        // Mock window.addEventListener so we can call event listeners when we
        // want during the test
        window.addEventListener = jest.fn((event, cb) => {
            handlers[event] = cb;
        });

        const buildingBlocks = [{
            id: 1,
            category: 'foo',
            image: 'bar'
        }, {
            id: 2,
            category: 'baz',
            image: 'quux'
        }];

        let wrapper;
        act(() => {
            wrapper = mount(
                <CharacterBuilder buildingBlocks={buildingBlocks} />
            );
        });

        // Set the width and height of the editor panel's container. Note that
        // parent() is currently broken so we have to use parents().first(). See
        // https://github.com/enzymejs/enzyme/issues/1991
        const container = wrapper.find(CharacterEditorPanel)
                                 .parents()
                                 .first()
                                 .getDOMNode();

        Object.defineProperty(container, 'clientWidth', { value: 500 });
        Object.defineProperty(container, 'clientHeight', { value: 200 });

        act(() => {
            handlers.resize();
        });

        // Re-render component after the resize
        wrapper.update();

        expect(wrapper.find(CharacterEditorPanel)).to.have.props({
            width: 200,
            height: 200,
            scale: 0.2
        });
    });

});
