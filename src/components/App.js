import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

import CharacterBuildingBlockList from './CharacterBuildingBlockList';
import MatchingCharacterList from './MatchingCharacterList';

const App = ({ buildingBlocks, matches }) => {
    return (
        <div className="app">
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand>Kanji Builder</Navbar.Brand>
            </Navbar>
            <CharacterBuildingBlockList buildingBlocks={buildingBlocks} />
            <MatchingCharacterList matches={matches} />
        </div>
    );
};

export default App;
