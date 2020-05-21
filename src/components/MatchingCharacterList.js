import React from 'react';
import { List, Range } from 'immutable';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Carousel from 'react-bootstrap/Carousel';

import './MatchingCharacterList.css';
import MatchingCharacter from './MatchingCharacter';

/**
 * Split a list into equal-sized chunks. Code is based on jokka's answer to the
 * Stack Overflow question "How to chunk ImmutableJS list into multiple lists":
 *
 *    https://stackoverflow.com/a/38765329
 */
const splitIntoChunks = (list, chunkSize = 1) => {
    return Range(0, list.count(), chunkSize)
        .map(chunkStart => List(list.slice(chunkStart, chunkStart + chunkSize)).setSize(chunkSize));
};

/**
 * A list of characters that match what was created in the character builder.
 */
const MatchingCharacterList = ({ matches }) => {
    const groups = splitIntoChunks(matches, 10);

    return (
        <div className="matching-character-list">
            <span className="num-matches">{matches.count()} matches</span>
            <Carousel
                interval={null}
                indicators={false}
                className="d-flex"
            >
                {groups.map(group => {
                    return (
                        <Carousel.Item key={group}>
                            <CardGroup>
                            {group.map(item => (
                                <Card key={item}>
                                    <Card.Body>
                                        <Card.Title>
                                            {item &&
                                                <MatchingCharacter
                                                    value={item}
                                                />
                                            }
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                            ))}
                            </CardGroup>
                        </Carousel.Item>
                    );
                })}
            </Carousel>
        </div>
    );
};

export default MatchingCharacterList;
