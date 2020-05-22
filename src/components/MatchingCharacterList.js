import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './MatchingCharacterList.css';
import MatchingCharacter from './MatchingCharacter';

/**
 * A list of characters that match what was created in the character builder.
 */
const MatchingCharacterList = ({ matches }) => {
    return (
        <div className="matching-character-list">
            <span className="num-matches">{matches.count()} matches</span>
            <Slider
                infinite={true}
                slidesToShow={10}
                slidesToScroll={10}
            >
                {matches.map(character => (
                    <MatchingCharacter key={character} value={character} />
                ))}
            </Slider>
        </div>
    );
};

export default MatchingCharacterList;
