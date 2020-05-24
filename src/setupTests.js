import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import chaiJestMock from 'chai-jest-mocks';

Enzyme.configure({ adapter: new Adapter() });
chai.use(chaiEnzyme());
chai.use(chaiJestMock);

// For react-slick. See https://github.com/akiran/react-slick/issues/742
window.matchMedia = window.matchMedia || function() {
    return {
        matches : false,
        addListener : function() {},
        removeListener: function() {}
    };
};
