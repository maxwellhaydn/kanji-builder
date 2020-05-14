import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import App from './components/App';
import buildingBlocks from './data/building-blocks.json';

const matches = [];

ReactDOM.render(
    <React.StrictMode>
        <App
            buildingBlocks={buildingBlocks}
            matches={matches}
        />
    </React.StrictMode>,
    document.getElementById('root')
);
