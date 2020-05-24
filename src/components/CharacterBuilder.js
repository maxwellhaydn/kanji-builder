import React, { useReducer } from 'react';
import { Set } from 'immutable';

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

/**
 * Display a list of character building blocks and a list of characters that
 * match the selected building blocks.
 */
const CharacterBuilder = (props) => {
    const initialState = { selected: [], matches: Set() };
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="character-builder">
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

export default CharacterBuilder;
export { reducer };
