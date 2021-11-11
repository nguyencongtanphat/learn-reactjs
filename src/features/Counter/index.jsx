import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Counter(props) {
    const [counter, setCounter] = useState(1)
    const [color, setColor] = useState('black')
    return (
        <div>
            {counter}
            <button onClick={() => setCounter(counter => counter + 1)}>increment</button> <br />
            {color}
            <button onClick={() => { color === 'black' ? setColor('white') : setColor('black') }}>Change color {color === 'black' ? 'white' : 'black'}</button>
        </div>
    );
}

export default Counter;