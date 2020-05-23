import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './MatchingCharacterList.css';
import MatchingCharacter from './MatchingCharacter';

const MAX_SLIDES_TO_SHOW = 8;

/**
 * A list of characters that match what was created in the character builder.
 */
const MatchingCharacterList = ({ matches }) => {
    const numMatches = matches.count();
    const slidesToShow = numMatches > MAX_SLIDES_TO_SHOW ?
                                      MAX_SLIDES_TO_SHOW :
                                      numMatches;
    const slidesToScroll = slidesToShow;

    return (
        <div className="matching-character-list text-center">
            <h4 className="num-matches">{numMatches} matches</h4>
            <Slider
                className="d-flex align-items-center"
                infinite={true}
                slidesToShow={slidesToShow}
                slidesToScroll={slidesToScroll}
            >
                {matches.map(character => (
                    <MatchingCharacter key={character} value={character} />
                ))}
            </Slider>
        </div>
    );
};

export default MatchingCharacterList;
