import React from 'react';

import details from '../data/character-details.json';

/**
 * Detail view of a character, including information like character readings and
 * definitions.
 */
const CharacterDetail = ({ character }) => {
    return (
        <div className="character-detail">
            <div className="character-literal">{character}</div>
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
        </div>
    );
};

export default CharacterDetail;
