import './index.css';
import ReactDOM  from 'react-dom';
import React  from 'react';

import Primeiro from './components/basicos/Primeiro';

const tag = <strong>React</strong>;

ReactDOM.render(
    <div>
        <h1>Hello, world!</h1>
        { tag } <br />
        <Primeiro />
    </div>,
    document.getElementById('root')
);