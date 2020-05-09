import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import App from './components/App';

const buildingBlocks = [{
    id: 1,
    category: 'Hats',
    image: '/images/lid.png'
}, {
    id: 2,
    category: 'Hats',
    image: '/images/roof.png'
}, {
    id: 3,
    category: 'Feet',
    image: '/images/four_feet.png'
}, {
    id: 4,
    category: 'Blocks',
    image: '/images/mouth.png'
}];

const matches = [];

ReactDOM.render(
    <React.StrictMode>
        <App
            buildingBlocks={buildingBlocks}
            matches={matches}
            editorWidth="600"
            editorHeight="600"
        />
    </React.StrictMode>,
    document.getElementById('root')
);
