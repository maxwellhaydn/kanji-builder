import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

import CharacterBuilder from './CharacterBuilder';

const App = (props) => {
    return (
        <div className="app">
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand>Kanji Builder</Navbar.Brand>
            </Navbar>
            <CharacterBuilder />
        </div>
    );
};

export default App;
