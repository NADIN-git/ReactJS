import React from 'react';
import { useState, useEffect } from 'react';
import { render } from 'react-dom';
import './style.css';

const App = () => {

    const [name, setName] = useState('React');
    const [coords, setCoords] = useState([]);

    const success = (position) => {
        // setCoords(coords.concat(position.coords))
        setCoords([
            ...coords,
            position.coords
        ])
        console.log("success! position=", position);
    }

    useEffect(() => {
        console.log("useEffect -> coords =", coords);
    });

    useEffect(() => {
        setInterval(() => {
            success({coords : {latitude: Math.random()*51, longitude: Math.random()*2.6}});
        }, 5000);
    }, []);

    return (
    <p>example to demonstrate growing an array stored with React usestate hook</p>
    )
}

render(<App />, document.getElementById('root'));
