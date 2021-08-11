import { Component } from 'react';

export default class PresentationRight extends Component {
    render () {
        return (
            <div>
                <div className="containerPresentationRight" id="containerPresentationRight">
                    <img src="./img/imageRight/logo.png" alt="Logo"/>
                    <div className="reactions">
                        <h2>Software Development</h2>
                        <div>
                            <button id="like">Me Gusta</button>
                            <button id="toShared" className="active-share">Compartir</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};