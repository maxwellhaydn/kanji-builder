import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';

import './App.css';
import CharacterBuilder from './CharacterBuilder';
import MatchingCharacterList from './MatchingCharacterList';

const App = ({ buildingBlocks, matches }) => {
    return (
        <Container className="app">
            <Navbar />
            <Row>
                <Col>
                    <CharacterBuilder buildingBlocks={buildingBlocks} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <MatchingCharacterList matches={matches} />
                </Col>
            </Row>
        </Container>
    );
};

export default App;
