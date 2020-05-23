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
    const numMatches = matches.count();

    // Number of matches to show at a time at each breakpoint
    const breakpoints = { 992: 8, 768: 5, 576: 3 };

    const responsive = Object.entries(breakpoints).map(([bp, numSlides]) => {
        const slidesToShow = Math.min(numMatches, numSlides);

        return {
            breakpoint: parseInt(bp),
            settings: {
                slidesToShow: slidesToShow,
                slidesToScroll: slidesToShow
            }
        };
    });

    // Number of matches to show at a time by default
    const slidesToShow = Math.min(numMatches, 10);

    const settings = {
        infinite: true,
        slidesToShow: slidesToShow,
        slidesToScroll: slidesToShow,
        responsive: responsive
    };

    return (
        <div className="matching-character-list text-center">
            <h4 className="num-matches">{numMatches} matches</h4>
            <Slider {...settings}
                className="d-flex align-items-center"
            >
                {matches.map(character => (
                    <MatchingCharacter key={character} value={character} />
                ))}
            </Slider>
        </div>
    );
};

export default MatchingCharacterList;
