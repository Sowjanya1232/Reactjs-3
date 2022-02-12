import React from 'react';
import ReactDOM from 'react-dom';
import Component from './Component.js';
import './style.css';
const App=()=>{
    return(
        <Component/>
    )
}
ReactDOM.render(
    <App/>,
    document.getElementById("root")
)