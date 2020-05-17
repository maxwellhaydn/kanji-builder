import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';

import CharacterBuilder from './CharacterBuilder';
import CharacterDetail from './CharacterDetail';

const App = (props) => {
    return (
        <div className="app">
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand>Kanji Builder</Navbar.Brand>
            </Navbar>
            <Switch>
                <Route
                    path="/detail/:character"
                    render={({ match }) => (
                        <CharacterDetail character={match.params.character} />
                    )}
                />
                <Route path="/">
                    <CharacterBuilder />
                </Route>
            </Switch>
        </div>
    );
};

export default App;
