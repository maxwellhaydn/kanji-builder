import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';

import CharacterBuilder from './CharacterBuilder';
import CharacterEditorPanel from './CharacterEditorPanel';
import CharacterBuildingBlockList from './CharacterBuildingBlockList';

chai.use(chaiEnzyme());

Enzyme.configure({ adapter: new Adapter() });

describe('CharacterBuilder', function() {

    it('should contain an editor and a list of building blocks', function() {
        const wrapper = shallow(<CharacterBuilder buildingBlocks="foo" />);

        expect(wrapper).to.contain([
            <CharacterEditorPanel />,
            <CharacterBuildingBlockList buildingBlocks="foo" />
        ]);
    });

});
