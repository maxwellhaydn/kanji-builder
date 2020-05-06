import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { Stage } from 'react-konva';

import CharacterEditorPanel from './CharacterEditorPanel';

chai.use(chaiEnzyme());

Enzyme.configure({ adapter: new Adapter() });

describe('CharacterEditorPanel', function() {

    it('should display an empty stage with the given dimensions', function() {
        const wrapper = shallow(<CharacterEditorPanel width="12" height="17"/>);

        expect(wrapper).to.contain(<Stage width="12" height="17"></Stage>);
    });

});
