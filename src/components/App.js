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
            <div className="footer">
                This site uses the <a href="http://www.edrdg.org/krad/kradinf.html">RADKFILE/KRADFILE</a> and <a href="http://www.edrdg.org/wiki/index.php/KANJIDIC_Project">KANJIDIC</a> dictionary files. These files are the property of the <a href="http://www.edrdg.org/">Electronic Dictionary Research and Development Group</a>, and are used in conformance with the Group's <a href="http://www.edrdg.org/edrdg/licence.html">licence</a>.
            </div>
        </div>
    );
};

export default App;
