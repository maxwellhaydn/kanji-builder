import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

import CharacterBuilder from './CharacterBuilder';
import MatchingCharacterList from './MatchingCharacterList';

const App = ({ buildingBlocks, matches }) => {
    return (
        <div className="app">
            <Navbar />
            <CharacterBuilder buildingBlocks={buildingBlocks} />
            <MatchingCharacterList matches={matches} />
        </div>
    );
};

export default App;
