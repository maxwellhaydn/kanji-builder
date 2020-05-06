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

    it('should begin empty', function() {
        const wrapper = shallow(<CharacterEditorPanel />);

        expect(wrapper).to.contain(<Stage></Stage>);
    });

});
