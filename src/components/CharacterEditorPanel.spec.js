import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Stage } from 'react-konva';

import CharacterEditorPanel from './CharacterEditorPanel';

describe('CharacterEditorPanel', function() {

    it('should display an empty stage with the given dimensions', function() {
        const wrapper = shallow(<CharacterEditorPanel width="12" height="17"/>);

        expect(wrapper).to.contain(<Stage width="12" height="17"></Stage>);
    });

});
