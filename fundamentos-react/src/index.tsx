import ReactDOM  from 'react-dom';
import React  from 'react';

const tag = <strong>React</strong>;

ReactDOM.render(
    <div>
        <h1>Hello, world!</h1>
        { tag }
    </div>,
    document.getElementById('root')
);