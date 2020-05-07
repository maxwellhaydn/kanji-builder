import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

import CharacterBuilder from './CharacterBuilder';
import MatchingCharacterList from './MatchingCharacterList';

const App = ({ buildingBlocks, matches, editorWidth, editorHeight }) => {
    return (
        <div className="app">
            <Navbar />
            <CharacterBuilder
                buildingBlocks={buildingBlocks}
                editorWidth={editorWidth}
                editorHeight={editorHeight}
            />
            <MatchingCharacterList matches={matches} />
        </div>
    );
};

export default App;
