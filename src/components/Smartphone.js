import React, { Component } from 'react';
import './Smartphone.css'

class Smartphone extends Component {
    render() {
        return (
            <div className="smartphone">
                <div className="volume-up-smartphone"></div>
                <div className="volume-down-smartphone"></div>
                <div className="power-smartphone"></div>
                <div className="header-smartphone">
                    <div className="camera-smartphone"></div>
                    <div className="speaker-smartphone"></div>
                    <div className="led-smartphone"></div>
                </div>
                <div className="screen-smartphone">
                    <button class="screen-number-button">1</button>
                </div>
                <div className="button-smartphone"></div>
            </div>
        );
    }
}

export default Smartphone;