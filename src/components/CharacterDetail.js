import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import './CharacterDetail.css';
import details from '../data/character-details.json';

/**
 * Detail view of a character, including information like character readings and
 * definitions.
 */
const CharacterDetail = ({ character }) => {
    return (
        <div className="character-detail">
            <Row>
                <Col xs={12} sm={4} md={3} className="justify-content-center">
                    <div className="character-literal">
                        <svg viewBox="0 0 100 100">
                            <text x="50%" y="40%" fontSize="90">
                                {character}
                            </text>
                        </svg>
                    </div>
                </Col>
                <Col>
                    <h2>Readings</h2>
                    <ul className="character-readings">
                        {details[character].readings.map((reading, index) => {
                            return <li key={index}>{reading}</li>;
                        })}
                    </ul>
                    <h2>Meanings</h2>
                    <ul className="character-meanings">
                        {details[character].meanings.map((meaning, index) => {
                            return <li key={index}>{meaning}</li>;
                        })}
                    </ul>
                </Col>
            </Row>
        </div>
    );
};

export default CharacterDetail;
