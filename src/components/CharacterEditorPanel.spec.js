import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Stage } from 'react-konva';

import CharacterEditorPanel from './CharacterEditorPanel';

describe('CharacterEditorPanel', function() {

    it('should display an empty stage with the given dimensions', function() {
        const wrapper = shallow(
            <CharacterEditorPanel
                width={12}
                height={17}
                scale={0.25}
            />
        );

        expect(wrapper).to.containMatchingElement(
            <Stage width={12} height={17} scale={{x: 0.25, y: 0.25}}></Stage>
        );
    });

});
