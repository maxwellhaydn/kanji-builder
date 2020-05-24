import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import CharacterBuilder from './CharacterBuilder';
import CharacterDetail from './CharacterDetail';
import './App.css';

const App = (props) => {
    return (
        <div className="app d-flex flex-column">
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand>Kanji Builder</Navbar.Brand>
            </Navbar>
            <Container fluid className="flex-fill">
                <Switch>
                    <Route
                        path="/detail/:character"
                        render={({ match }) => (
                            <CharacterDetail
                                character={match.params.character}
                            />
                        )}
                    />
                    <Route path="/">
                        <CharacterBuilder />
                    </Route>
                </Switch>
            </Container>
            <div className="footer text-center">
                <p><small>This site uses the <a href="http://www.edrdg.org/krad/kradinf.html">RADKFILE/KRADFILE</a> and <a href="http://www.edrdg.org/wiki/index.php/KANJIDIC_Project">KANJIDIC</a> dictionary files. These files are the property of the <a href="http://www.edrdg.org/">Electronic Dictionary Research and Development Group</a>, and are used in conformance with the Group's <a href="http://www.edrdg.org/edrdg/licence.html">licence</a>.</small></p>
            </div>
        </div>
    );
};

export default App;
