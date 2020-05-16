import React, { useReducer } from 'react';
import { Set } from 'immutable';
import Navbar from 'react-bootstrap/Navbar';

import CharacterBuildingBlockList from './CharacterBuildingBlockList';
import MatchingCharacterList from './MatchingCharacterList';
import lookup from '../data/lookup.json';

// Convert lookup table to use Sets instead of arrays so we can do set
// operations on it
for (let buildingBlock in lookup) {
    lookup[buildingBlock] = Set(lookup[buildingBlock]);
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'changeSelection':
            const selected = action.payload;
            const possibleMatches = selected.map(item => lookup[item]);
            const matches = Set.intersect(possibleMatches);

            return { selected, matches };
        default:
            throw new Error('Invalid action');
    }
};

const App = (props) => {
    const initialState = { selected: [], matches: Set() };
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="app">
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand>Kanji Builder</Navbar.Brand>
            </Navbar>
            <CharacterBuildingBlockList
                onChange={selected => {
                    dispatch({
                        type: 'changeSelection',
                        payload: selected
                    });
                }}
                selected={state.selected}
            />
            <MatchingCharacterList matches={state.matches} />
        </div>
    );
};

export default App;
export { reducer };
